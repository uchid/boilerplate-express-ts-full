import * as express from 'express';
import user from './user';

const router = express.Router();

router.use('/user', user);

router.get('/', (_req, res) => {
  res.send('【boilerplate app】This is root.');
});

export default router;
