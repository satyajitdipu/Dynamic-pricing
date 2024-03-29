const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'password',
  database: 'postgres',
  port:5432,
});

module.exports = sequelize;
