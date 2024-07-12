const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Visita = sequelize.define('visitas', {
	FechaAdd: {
		type: DataTypes.DATEONLY,
		allowNull: false
	},
	HoraAdd: {
		type: DataTypes.TIME,
		allowNull: false
	},
	Sistolica: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Diastolica: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Pulsaciones: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Glucosa: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Digestion: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Observacion: {
		type: DataTypes.STRING,
		allowNull: false
	},
	ProblemasEquilibrio: {
		type: DataTypes.STRING,
		allowNull: false
	},
	DolorCabeza: {
		type: DataTypes.STRING,
		allowNull: false
	},

	Recomendacion: {
		type: DataTypes.STRING,
		allowNull: false
	},

	Malestar: {
		type: DataTypes.STRING,
		allowNull: false
	},
    //malestar
	
	//medicamentos

	
});

module.exports = Visita;