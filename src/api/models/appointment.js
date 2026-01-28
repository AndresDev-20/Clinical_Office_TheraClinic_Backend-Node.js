'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Appointment.belongsTo(models.patient, {
        foreignKey: "patient_id",
        as: "Patient"
      })

      Appointment.belongsTo(models.User, {
        foreignKey: "doctor_id",
        as: "users"
      })
    }
  }
  Appointment.init({
    patient_id: DataTypes.INTEGER,
    doctor_id: DataTypes.INTEGER,
    office_id: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    state: DataTypes.STRING,
    notes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};