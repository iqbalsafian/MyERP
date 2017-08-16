import express from 'express';
import isEmpty from 'lodash/isEmpty';
import Validator from 'validator';
import knex from 'knex';
import bcrypt from 'bcrypt';
import User from '../models/user';

const router = express.Router();

function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Username is required';
  }

  if (!Validator.isEmail(data.username)) {
    errors.username = 'Username should be in email format';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  return {
    errors, isValid: isEmpty(errors)
  }
}

router.post('/login', (req, res, next) => {
  // res.setHeader('Content-Type', 'application/json');
  const { errors, isValid } = validateInput(req.body);
  if (!isValid) {
    res.status(400).json(errors);
  } else {
    const { username, password } = req.body;

    User
      .where({username: username})
      .fetch()
      .then((staff) => {
        res.status(200).json(staff);
      })
      .catch((error) => {
        res.status(300).json(errors);
      })

    // res.json(
    //   {
    //     "statuscode": "200",
    //     "errors": {}
    //   }
    // )
  }

});

export default router;
