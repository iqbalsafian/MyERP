import express from 'express';
import isEmpty from 'lodash/isEmpty';
import Validator from 'validator';
import knex from '../db/knex';
import bcrypt from 'bcrypt';
import Entities from '../models-knex/entities';
import jwt from 'jsonwebtoken';
import jwtConfig from '../jwtConfig';
const router = express.Router();
const staff = require('./staff')(router);
const department = require('./department')(router);
const test = require('./test')(router);
const authentication = require('./authentication')(router);

router.get('/', (req, res, next) => {
  res.status(200).json({
    'string': 'It works!'
  })
});

export default router;
