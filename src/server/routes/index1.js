import express from 'express';
import schema from '../graphql/schema';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});

router.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
router.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

export default router;
