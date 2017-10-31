import express from 'express';
import isEmpty from 'lodash/isEmpty';
import Validator from 'validator';
import knex from '../db/knex';
import bcrypt from 'bcrypt';
// import Entities from '../models-knex/entities';
import jwt from 'jsonwebtoken';
import jwtConfig from '../jwtConfig';
// import {validateLogin} from '../../utils/validateLogin';
import validator from 'validator';

function validateLogin(email, password) {
  var errors = {};

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

module.exports = (router) => {
  router.post('/api/login', (req, res, next) => {
    var { email = '', password = ''} = req.body;
    let errors = validateLogin(email, password);
    if (errors.email || errors.password) {
      res.status(400).json(errors)
    } else {
      knex('entities')
        .select('id', 'fullname', 'password_digest')
        .where({
          'email': email,
          'isstaff': true
        })
        .then(staff => {
          if (staff.length) {
            console.log(staff);
            if (bcrypt.compareSync(password, staff[0].password_digest)) {
              const token = jwt.sign({ id: staff[0].id, email:email }, jwtConfig.jwtSecret);
              res.status(200).json({'statuscode':'200', token});
            } else {
              res.status(401).json({'errors': 'Invalid credentials'})
            }
          } else {
            res.status(401).json({'errors': 'Invalid credentials'})
          }
        })
    }
  })
}
