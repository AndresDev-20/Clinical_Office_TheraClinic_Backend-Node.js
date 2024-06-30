const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Enfermedad = sequelize.define('enfermedad', {
	NombreEnfermedad: {
		type: DataTypes.STRING,
		allowNull: false
	},
});

module.exports = Enfermedad;