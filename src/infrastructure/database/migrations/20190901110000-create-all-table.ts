import { QueryInterface, Sequelize } from 'sequelize';
import { sequelize } from '../models';

// To prevent drop table（ex. on the production） for mistaking, sync() is not force.
// SequelizeMeta doesn't execute migration file executed once, but for in case meta info is changed.
// If want to drop the table and re-create, modify to sync({ force: true }).
module.exports = {
  // tslint:disable-next-line:variable-name
  up: async (_queryInterface: QueryInterface, _sequelize: Sequelize) => {
    return await sequelize.sync();
  },

  // tslint:disable-next-line:variable-name
  down: async (_queryInterface: QueryInterface, _sequelize: Sequelize) => {
    return await sequelize.drop();
  },
};
