const validator = require('validator');

function validateLogin(email = '', password = '') {
  let errors;

  if (email === '') {
    errors.email = 'Email cannot be empty';
  }
  if (!validator.isEmail(email)) {
    errors.email = 'Invalid email format';
  }
  if (password === '') {
    errors.password = 'Password cannot be empty';
  }

  return errors;
}
