import express from 'express';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/login', (req, res, next) => {
  //res.setHeader('Content-Type', 'application/json');
  res.json(
    {
      "statuscode": "200",
      "errors": {}
    }
  )
});

export default router;
