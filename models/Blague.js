const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Blague = sequelize.define('Blague', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  question: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  reponse: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  tableName: 'blagues',
  timestamps: true,
});

module.exports = Blague;


