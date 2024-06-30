const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Malestar = sequelize.define('malestar', {
	NombreMalestar: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Desde: {
		type: DataTypes.DATEONLY,
		allowNull: false
	},
	Zona: {
		type: DataTypes.STRING,
		allowNull: false
	},
});

module.exports = Malestar;