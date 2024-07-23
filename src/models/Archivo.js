const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Archivo = sequelize.define('archivo', {
	Nombre: {
		type: DataTypes.STRING,
		allowNull: false
	},
	ruta: {
		type: DataTypes.STRING,
		allowNull: false
	},
	fecha: {
		type: DataTypes.DATEONLY,
		allowNull: false
	},
	pacienteId: {
		type: DataTypes.INTEGER,
		allowNull: false
	  }
	}, {
	  tableName: 'archivos',
	  timestamps: false
});

module.exports = Archivo;