import { QueryInterface, Sequelize } from 'sequelize';

module.exports = {
  // tslint:disable-next-line:variable-name
  up: async (queryInterface: QueryInterface, _sequelize: Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          id: '00000000-0000-0000-0000-000000000000',
          name: 'Test name',
          birthday: new Date(),
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  // tslint:disable-next-line:variable-name
  down: async (queryInterface: QueryInterface, _sequelize: Sequelize) => {
    return queryInterface.bulkDelete('Users', {}, {});
  },
};
