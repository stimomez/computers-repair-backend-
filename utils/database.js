const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '1221',
  database: 'computers-repair',
  logging: false,
});

module.exports = { db };
