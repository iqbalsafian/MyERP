import jwt from 'jsonwebtoken';
import jwtConfig from '../jwtConfig';

export default (jwtData) => {
  if (jwtData) {
    return jwt.verify(jwtData, jwtConfig.jwtSecret);
  } else {
    return {
      stats: false,
      errors: 'Invalid token'
    }
  }
}
