'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Office extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Office.hasMany(models.Patient, {
        foreignKey: "office_id",
        as: 'patients'
      })

      Office.hasMany(models.Appointment, {
        foreignKey: "office_id",
        as: "appointments"
      })
    }
  }
  Office.init({
    nameOffice: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Office',
  });
  return Office;
};