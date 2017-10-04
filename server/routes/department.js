import express from 'express';
import isEmpty from 'lodash/isEmpty';
import Validator from 'validator';
import knex from '../db/knex';
import bcrypt from 'bcrypt';
// import Entities from '../models-knex/entities';
import jwt from 'jsonwebtoken';
import jwtConfig from '../jwtConfig';

module.exports = (router) => {
  router.get('/api/department/:pageNum', (req, res, next) => {
    knex('entities')
      .select('id', 'fullname')
      .where('isdepartment', true)
      .then(departments => {
        console.log(departments);
        res.status(200).json({
          departments
        })
    })
  })
}
