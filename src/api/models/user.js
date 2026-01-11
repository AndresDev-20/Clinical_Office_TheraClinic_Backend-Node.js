'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstNames: {
      type: DataTypes.STRING
    },
    lastNames: {
      type: DataTypes.STRING
    },
    age: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    sex: DataTypes.STRING,
    cedula: DataTypes.INTEGER,
    state: DataTypes.BOOLEAN,
    address: DataTypes.STRING,
    civil_state: DataTypes.STRING,
    addiction: DataTypes.BOOLEAN,
    labor_queaser: DataTypes.STRING,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};