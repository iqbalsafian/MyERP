import knex from 'knex';
import bcrypt from 'bcrypt';
import User from '../models/user';
import jwt from 'jsonwebtoken';
import jwtConfig from '../jwtConfig';
import chatToken from './chattoken';


module.exports = (io) => {
  let error;
  io.use(function(socket, next){
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
    socket.on("getData", (data) => {
      if (error) socket.emit('reply', error);
      else socket.emit("reply", 'hola mundo');
    })
    socket.on("disconnect", () => {
      // console.log('client disconnected');
    });
  });
}
