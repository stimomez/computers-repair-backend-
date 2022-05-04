const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

//repairs
const Repair = db.define('repair', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  computerNumber: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  comments: {
    type: DataTypes.STRING,
    allowNull: false
  },

  userId: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending',
  },
});

module.exports = { Repair };
