# boilerplate-express-ts-full

A API boilerplate with Express, TypeScript, webpack, onion architecture. This boilerplate is Used Sequelize as ORM for MySQL,InversifyJS to implement inversion of control (IoC) of onion architecture.

# Environment

- yarn
- Nodejs, Express
- TypeScript
- MySQL, [Sequelize](https://sequelize.org/), [sequelize-typescript](https://github.com/RobinBuschmann/sequelize-typescript)
- [InversifyJS](https://github.com/inversify/InversifyJS)
- [axios](https://github.com/axios/axios)
- [webpack](https://webpack.js.org/)
- [Jest](https://jestjs.io/ja/), [supertest](https://github.com/visionmedia/supertest)
- [nodemon](https://github.com/remy/nodemon)
- [tslint-config-airbnb](https://github.com/progre/tslint-config-airbnb)

# Development

```
# set up installation
  git clone
  yarn install          # install dependencies
  yarn run db:init      # initialize database with sequelize(.sequelizerc) and config/database.js

# script
  yarn run start        # build & start app for production
  yarn run start:dev    # lint & build & start app for development and refresh automatically with each code save
  yarn run start:without-webpack    # for when want to use only TypeScript compile not webpack
  yarn run build:prod   # only build for production etc.
  yarn run lint         # lint with tslint of airbnb style
  yarn run test         # test with jest, jest.config.js and ts-jest
  yarn run db:generate:migration [argument of filename]    # generate skelton migration file to src/infrastructure/database/migrations directory
  yarn run db:generate:seeder [argument of filename]    # generate skelton seeder file to src/infrastructure/database/seeders directory
  yarn run db:migrate   # compile ts file & migrate with shell scripts
  yarn run db:seed      # compile ts file & seed with shell scripts
```

# Supplement

## Why onion architecture

The onion architecture is architecture that uses the concept of layers. For more fundamentals and details, please refer to other documents already exists a lot on the web.  
There are Hexagonal, Clean architecture and so on as other Layered approach, but I selected this architecture for following reasons.

- On the premise that, wanted to use concept of DDD for decoupling and flexibility.
- I think onion architecture is more simple, uncomplicated and intuitive than others.
- What is important for me is be able to implement IoC, DIP, SOLID etc.
- If needed, can switch to all-inclusive such as clean arcitecture.

## Tsconfig for webpack or only 'ts' compile & 'node'('ts-node')

Comment more infomation to appropriate file if necessary, but use depending on your project environment.  
In this project, set `module: es2015` (import, export) for situation used webpack also considering tree shaking,  
and set `module: commonjs` for situation used `node` exec.

## Use plugin for running Nodemon with different process

For serial execution(&&) and running webpack --watch & Nodemon as a separate process, use [Nodemon Webpack Plugin](https://github.com/Izhaki/nodemon-webpack-plugin).  
(in webpack.dev.js)

## Use special path sequelize config for handling typescript

For handling typescript migration & seeder file, path of sequelize config(.sequelizerc) is unusual , so be careful if use [sequelize-cli](https://github.com/sequelize/cli) command.  
ex. sequelize model:generate

## If you want to use ts compile and nodemon

In this project, webpack is used for some reasons, so follow the steps as flow of compile and reload.  
webpack -> typescript -> webpack -> nodemon  
\*different, to be exact  
Therefore, modify configuration if you use ts compile and watch with nodemon without webpack.  
ex.

```
# nodemon.json
{
  "watch": ["src"],
  "ext": "ts",
  "exec": "yarn run ts-node ./src/index.ts"
}
```
