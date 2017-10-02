import express from 'express';
import isEmpty from 'lodash/isEmpty';
import Validator from 'validator';
import knex from '../db/knex';
import bcrypt from 'bcrypt';
import Entities from '../models-knex/entities';
import jwt from 'jsonwebtoken';
import jwtConfig from '../jwtConfig';

module.exports = (router) => {
  router.post('/api/login', (req, res, next) => {
    const { email, password } = req.body;

    knex('entities')
      .select('id', 'fullname', 'password_digest')
      .where({
        'email': email,
        'isstaff': true
      })
      .then(staff => {
        if (staff !== null) {
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
  })
}
