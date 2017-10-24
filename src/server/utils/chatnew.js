import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import jwtConfig from '../jwtConfig';
// import chatToken from './chattoken';
import knex from '../db/knex';
var decodedJson;

module.exports = (io) => {
  var error;
  io.use((socket, next) => {
    if (socket.handshake.query && socket.handshake.query.token){
      jwt.verify(socket.handshake.query.token, jwtConfig.jwtSecret, function(err, decoded) {
        if(err) {
          return next(new Error('Authentication error'));
          error = err;
        }
        decodedJson = decoded;
        next();
      });
    }
    next(new Error('Authentication error'));
  })
  .on('connection', socket => {
    if (error) socket.emit('reply', 'There is an error: ' + error);
    else {
      const { id } = decodedJson;
      socket.on("displaySnapshot", (data) => {
        socket.emit('reply', [{'message': 'Hoolla'}])
        knex('conversations')
          .select(
            'conversation_messages.message',
            'conversation_messages.updated_at',
            'conversations.conversation_type',
            'entities.fullname as e_fullname',
            'entities.id',
            'conversations.id as conv_id'
          )
          .join('conversation_messages', 'conversations.id', 'conversation_messages.conversation_id')
          .join('entities', 'conversation_messages.entity_id', 'entities.id')
          .where('conversation_messages.entity_id', id)
          .debug()
          .then(conversations => {
            if (conversations.length) {
              socket.emit('reply', conversations);
            } else {
              socket.emit('reply', [{'message': 'Hoolla'}])
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
