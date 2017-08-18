import express from 'express';
import isEmpty from 'lodash/isEmpty';
import Validator from 'validator';
import knex from 'knex';
import bcrypt from 'bcrypt';
import User from '../models/user';
import jwt from 'jsonwebtoken';
import jwtConfig from '../jwtConfig';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});

export default router;

function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Username is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Username should be in email format';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  return {
    errors, isValid: isEmpty(errors)
  }
}

router.post('/api/login', (req, res, next) => {
  const { errors, isValid } = validateInput(req.body);
  if (!isValid) {
    res.status(400).json(errors);
  } else {
    const { email, password } = req.body;

    setTimeout(() => {
      User
      .where({email: email})
      .fetch()
      .tap((staff) => {
        if (staff != null) {
          if (bcrypt.compareSync(password, staff.get('password_digest'))) {
            const token = jwt.sign({ id: staff.get('id'), email:email }, jwtConfig.jwtSecret);
            res.status(200).json({'statuscode':'200', token});
          } else {
            res.status(303).json({'errors':'Invalid credentials'})
          }
        }
        else {
          res.status(302).json({'errors': 'Invalid credentials'})
        }
      })
    }, 1000);

  }

});

router.post('/api/staff/new', (req, res, next) => {
  const { email, password } = req.body;
  new User({
    email,
    password_digest: bcrypt.hashSync(password, 13)
  }).save()
  .then((saved) => {
    res.status(200).json(saved);
  })
  .catch((errors) => {
    res.status(300).json(errors);
  })
});

router.get('/api/staff', (req, res, next) => {
  res.status(200).json([
    {id: 1, firstName: 'John', lastName: 'Doe', email: 'johnny@imail.com'},
    {id: 2, firstName: 'Joe', lastName: 'Doe', email: 'joey@imail.com'},
    {id: 3, firstName: 'Jane', lastName: 'Doe', email: 'jenny@imail.com'}
  ])
});
