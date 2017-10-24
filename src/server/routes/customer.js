import express from 'express';

const router = express.Router();

router.get('/api/list', (req, res) => {
  res.status(200).json({'title': 'taitel'})
});

export default router;
