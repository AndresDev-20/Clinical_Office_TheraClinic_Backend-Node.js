const { Sequelize } = require('sequelize');
const path = require('path');
require('dotenv').config();

// Configuración para SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '..', '../data', 'database.sqlite'), // Ruta al archivo de la base de datos
  logging: false
});

module.exports = sequelize;
