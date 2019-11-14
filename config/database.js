// change depends on project
module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'boilerplate_development',
    host: '127.0.0.1',
    dialect: 'mysql',
    timezone: '+00:00', // Set timezone UTC basically.
  },
  test: {
    username: 'root',
    password: null,
    database: 'boilerplate_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    timezone: '+00:00', // Set timezone UTC basically.
  },
  production: {
    username: 'root',
    password: null,
    database: 'boilerplate_production',
    host: '127.0.0.1',
    dialect: 'mysql',
    timezone: '+00:00',
  },
};
