const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Cita = sequelize.define('cita', {
	Titulo: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Paciente: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Phone: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Fecha: {
		type: DataTypes.DATEONLY,
		allowNull: false
	},
	Hora: {
		type: DataTypes.TIME,
		allowNull: false
	}
});

module.exports = Cita;