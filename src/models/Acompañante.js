const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Acompañante = sequelize.define('acompañante', {
	Nombres: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Telefono: {
		type: DataTypes.STRING,
		allowNull: false
	}
});

module.exports = Acompañante;