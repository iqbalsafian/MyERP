import express from 'express';
import isEmpty from 'lodash/isEmpty';
import Validator from 'validator';
import knex from '../db/knex';
import bcrypt from 'bcrypt';
// import Entities from '../models-knex/entities';
import jwt from 'jsonwebtoken';
import jwtConfig from '../jwtConfig';

module.exports = (router) => {
  router.get('/api/test/cm', (req, res, next) => {
    knex('conversation_messages')
      // .table('conversation_participants')
      .distinct('conversation_id')
      .max("id")
      .select(knex.raw('jsonb_agg(entity_id) as entities, jsonb_agg(message) as messages'))
      .groupBy("conversation_id")
      .debug()
      .then(results => {
        res.status(200).json(results);
      })
  })
}
