import express from 'express';
import isEmpty from 'lodash/isEmpty';
import Validator from 'validator';
import knex from '../db/knex';
import bcrypt from 'bcrypt';
// import Entities from '../models-knex/entities';
import jwt from 'jsonwebtoken';
import jwtConfig from '../jwtConfig';

module.exports = (router) => {
  router.get('/api/staff/:page*?', (req, res, next) => {
    const page = req.params.page ? req.params.page : 1;
    const perPage = 12;
    var countStaff = 0;

    knex('entities')
      .select('id', 'fullname', 'email', 'designation')
      .where(
        {
          'isstaff': true
        }
      )
      .limit(perPage).offset((page > 0 ? (page-1) : 0)*perPage)
      .then((staffList) => {
        knex('entities')
          .count('id')
          .where({ 'isstaff': true })
          .then(result => {
            // console.log('#: ' + result[0].count);
            // return result[0].count;
            res.status(200).json({
              staffList,
              countStaff: result[0].count
            })
          })
      })
  })

  router.get('/api/staffdetails', (req, res, next) => {
    res.status(400).json({'staff':null});
  })

  router.get('/api/staffdetails/:id', (req, res, next) => {
    const id = req.params.id ? req.params.id : 0;
    if (id) {
      knex('entities')
        .select('id', 'fullname', 'email', 'designation', 'firstname', 'lastname')
        .where(
          {
            'isstaff': true,
            'id': id
          }
        )
        .limit(1)
        .then((staff) => {
          res.status(200).json({
            staff
          })
        })
    } else {
      res.status(204).json({
        'staff': null
      })
    }
  })
}
