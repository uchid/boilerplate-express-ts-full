/* eslint @typescript-eslint/explicit-function-return-type:0, @typescript-eslint/no-unused-vars:0 */
import { QueryInterface, Sequelize } from 'sequelize';
import { sequelize } from '../models';

// To prevent drop table（ex. on the production） for mistaking, sync() is not force.
// SequelizeMeta doesn't execute migration file executed once, but for in case meta info is changed.
// If want to drop the table and re-create, modify to sync({ force: true }).
module.exports = {
  up: async (_queryInterface: QueryInterface, _sequelize: Sequelize) => {
    return await sequelize.sync();
  },

  down: async (_queryInterface: QueryInterface, _sequelize: Sequelize) => {
    return await sequelize.drop();
  },
};
