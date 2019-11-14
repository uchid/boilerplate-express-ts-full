import express from 'express';
import bodyParser from 'body-parser';
import 'reflect-metadata';

import router from './presentation/http/router';

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  );
  next();
});

app.use('/', router);
// For when want to use '~/api/module' URL.
// app.use('/api', apiRouter)

app.listen(port, () =>
  console.log(`boilerplate app listening on port ${port}!`),
);

export default app;
