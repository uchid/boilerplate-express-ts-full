import { Sequelize } from 'sequelize-typescript';
import { User } from './User';
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../../../../config/database.js`)[env];

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

sequelize.addModels([User]);

export const models = {
  User,
};
