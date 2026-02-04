'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClinicalRecord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ClinicalRecord.belongsTo(models.Patient, {
        foreignKey: "patient_id",
        as: "patient"
      })

      ClinicalRecord.belongsTo(models.User, {
        foreignKey: "doctor_id",
        as: "doctor"
      })

      ClinicalRecord.hasMany(models.ClinicalNote, {
        foreignKey: "clinical_record_id",
        as: "ClinicalNotes"
      })
    }
  }
  ClinicalRecord.init({
    patient_id: DataTypes.INTEGER,
    doctor_id: DataTypes.INTEGER,
    state: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ClinicalRecord',
  });
  return ClinicalRecord;
};