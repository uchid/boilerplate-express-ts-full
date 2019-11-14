import * as express from 'express';

import { container } from '../../../registry/registry';
import { TYPES } from '../../../registry/types';
import { UserApplication } from '../../../application/UserApplication';
import { UserSerializer } from '../serializer/userSerializer';

const userApplication = container.get<UserApplication>(TYPES.UserApplication);
const router = express.Router();

// route -> ~/user/
router.get('/:id', async (req, res) => {
  const user = await userApplication.fetchUserInfo(req.params['id']);
  res.json(UserSerializer.serialize(user));
});

// test!!
/*
router.get('/test/:id', async (_req, res) => {
  await userApplication.createUser('test name', '2019-12-27');
  console.log('[create] exec test');

  res.send('This is user module route.');
});
*/

export default router;
