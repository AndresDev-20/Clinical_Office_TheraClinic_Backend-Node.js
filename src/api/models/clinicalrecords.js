'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClinicalRecords extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ClinicalRecords.belongsTo(models.Patient, {
        foreignKey: "patient_id",
        as: "patient"
      })

      ClinicalRecords.belongsTo(models.User, {
        foreignKey: "doctor_id",
        as: "user"
      })

      ClinicalRecords.hasMany(models.ClinicalNotes, {
        foreignKey: "clinical_record_id",
        as: "ClinicalNotes"
      })
    }
  }
  ClinicalRecords.init({
    patient_id: DataTypes.INTEGER,
    doctor_id: DataTypes.INTEGER,
    state: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ClinicalRecords',
  });
  return ClinicalRecords;
};