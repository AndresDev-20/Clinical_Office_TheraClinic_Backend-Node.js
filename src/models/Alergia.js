const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Alergia = sequelize.define('alergias', {
	NombreAlergia: {
		type: DataTypes.STRING,
		allowNull: false
	},
});

module.exports = Alergia;