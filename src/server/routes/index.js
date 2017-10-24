import express from 'express';
import isEmpty from 'lodash/isEmpty';
import Validator from 'validator';
import knex from 'knex';
import bcrypt from 'bcrypt';
import Entities from '../models/user';
import jwt from 'jsonwebtoken';
import jwtConfig from '../jwtConfig';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/knex', (req, res, next) => {
  knex('entities')
    .select("fullname")
    .then(entity => {
      res.status(200).json(entity)
    })
})

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
      Entities
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
  new Entities({
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

router.get('/api/department', (req, res, next) => {
  Entities.where('isdepartment', true)
  .fetchPage({
    pageSize: 9,
    page: 1
  })
  .then((results) => {
    res.status(200).send(results)
  })
  .catch((errors) => {
    res.status(401).send(errors)
  })
})

router.get('/api/departmentdetails/:departmentId', (req, res, next) => {
  Entities.where({
    isdepartment: true,
    id: req.params.departmentId
  }).fetch()
  .then((results) => {
    res.status(200).send(results)
  })
  .catch((err) => {
    res.status(401).send(err)
  })
})

router.get('/api/department/:pageNumber', (req, res, next) => {
  Entities.where('isdepartment', true)
  .fetchPage({
    pageSize: 9,
    page: req.params.pageNumber ? req.params.pageNumber : 1
  })
  .then((results) => {
    res.status(200).send(results)
  })
  .catch((errors) => {
    res.status(401).send(errors)
  })
})

router.get('/api/staff', (req, res, next) => {
  Entities
  .where('isstaff', 'true')
  .fetchPage({
    pageSize: 9,
    page: 1
  })
  .then((results) => {
    res.status(200).send(results)
  })
  .catch((errors) => {
    res.status(401).send(errors)
  })
});

router.get('/api/staff/:pageNumber', (req, res, next) => {
  Entities.where('isstaff', true).fetchPage({
    pageSize: 12,
    page: req.params.pageNumber ? req.params.pageNumber : 1
  })
  .then((results) => {
    var theResults = {
      results,
      pagination: results.pagination
    }
    res.status(200).json(theResults)
  })
  .catch((errors) => {
    res.status(401).send(errors)
  })
});

router.get('/api/staffdetails/:id', (req, res, next) => {
  Entities.where('id', req.params.id).fetch()
    .then((results) => {
      res.status(200).json(
        results
      )
    })
    .catch((errors) => {
      res.status(401).json(errors)
    })
})

router.get('/chat', (req, res, next) => {
  res.status(200).json({
    response: 'Here i am'
  })
})
