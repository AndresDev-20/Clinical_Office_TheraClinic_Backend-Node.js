const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Deuda = sequelize.define('deuda', {
	title: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Monto: {
		type: DataTypes.STRING,
		allowNull: false
	},
	fecha: {
		type: DataTypes.DATEONLY,
		allowNull: false
	}
});

module.exports = Deuda;