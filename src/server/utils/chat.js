// import knex from 'knex';
import bcrypt from 'bcrypt';
import User from '../models/user';
import conversationsMessages from '../models/conversation_messages';
import conversationsParticipants from '../models/conversation_participants';
import conversations from '../models/conversations';
import jwt from 'jsonwebtoken';
import jwtConfig from '../jwtConfig';
import chatToken from './chattoken';
import knexfile from '../knexfile';
const knex = require('knex')(knexfile.development);
var nsp = io.of('/');
module.exports = (nsp) => {
  var error;
  // console.log('erww');

  nsp.use(function(socket, next){
    if (socket.handshake.query && socket.handshake.query.token){
      jwt.verify(socket.handshake.query.token, jwtConfig.jwtSecret, function(err, decoded) {
        if(err) {
          return next(new Error('Authentication error'));
          error = err;
        }
        socket.decoded = decoded;
        next();
      });
    }
    next(new Error('Authentication error'));
  })
  .on('connection', socket => {
    if (error) socket.emit('reply', 'There is an error: ' + error);
    else {
      const { token } = socket.handshake.query;
      const { id } = jwt.decode(token);
      socket.on("displaySnapshot", (data) => {
        conversationsMessages
          .query(qb => {
            qb.select(
              knex.raw(
                `max(conversation_messages.id) as maxconversationId, max(conversation_messages.message) as message,
                 max(conversation_messages.created_at) as created_at`),
                'conversations.id'
              )
            qb.leftJoin(
              'conversations',
              'conversations.id',
              'conversation_messages.conversation_id'
            )
            qb.groupBy('conversations.id')
            qb.where({entity_id: id})
            qb.debug(true)
          })
          .fetchAll()
          .then(results => {
            // console.log(results);
            if (results.length) {
              socket.emit("reply", results);
            } else {
              socket.emit('reply', '');
            }
          })
      });
      socket.on("sendChat", (data) => {
        socket.emit("reply", "msg received");
      });
      socket.on("disconnect", () => {
        // console.log('client disconnected');
      });
    }
  });
}
