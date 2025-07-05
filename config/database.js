const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,         // nom de la BDD
  process.env.DB_USER,         // utilisateur
  process.env.DB_PASS,         // mot de passe
  {
    host: process.env.DB_HOST, // hôte
    port: process.env.DB_PORT, // port
    dialect: 'postgres',       // !!! ÉCRIS ICI EN DUR !!!
    logging: false
  }
);

module.exports = sequelize;
