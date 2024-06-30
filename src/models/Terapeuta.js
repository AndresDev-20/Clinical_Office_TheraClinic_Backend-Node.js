const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Terapeuta = sequelize.define('terapeuta', {
	Nombres: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Apellidos: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Correo: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
	Identificacion: {
		type: DataTypes.INTEGER,
		allowNull: false,
		unique: true
	},
	Contraseña: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Rol: {
		type: DataTypes.STRING,
		allowNull: false
	},
});

Terapeuta.prototype.toJSON = function(){
	const values = Object.assign({}, this.get())
	delete values.Contraseña;
	return values
}

module.exports = Terapeuta;