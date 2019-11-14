cd $(dirname ${0}) && cat > ../../src/infrastructure/database/migrations/$(date +"%Y%m%d%H%M%S")-$1.ts << EOF
import { QueryInterface, Sequelize } from 'sequelize';

module.exports = {
  // tslint:disable-next-line:variable-name
  up: async (queryInterface: QueryInterface, sequelize: Sequelize) => {
    // Write migration code here.
  },

  // tslint:disable-next-line:variable-name
  down: async (queryInterface: QueryInterface, sequelize: Sequelize) => {
    // If migration fails, this will be called. Rollback your migration changes.
  },
};
EOF