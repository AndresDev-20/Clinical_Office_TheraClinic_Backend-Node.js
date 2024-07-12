const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Observacion = sequelize.define('observacion', {
	text: {
		type: DataTypes.STRING,
		allowNull: false
	},
	fecha: {
		type: DataTypes.DATEONLY,
		allowNull: false
	},
});

module.exports = Observacion;