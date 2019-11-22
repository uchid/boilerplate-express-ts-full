cd $(dirname ${0}) && cat > ../../src/infrastructure/database/migrations/$(date +"%Y%m%d%H%M%S")-$1.ts << EOF
/* eslint @typescript-eslint/explicit-function-return-type:0, @typescript-eslint/no-unused-vars:0 */
import { QueryInterface, Sequelize } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface, sequelize: Sequelize) => {
    // Write migration code here.
  },

  down: async (queryInterface: QueryInterface, sequelize: Sequelize) => {
    // If migration fails, this will be called. Rollback your migration changes.
  },
};
EOF