'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClinicalNote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ClinicalNote.belongsTo(models.ClinicalRecord, {
        foreignKey: "clinical_record_id",
        as: "ClinicalNotes"
      })
    }
  }
  ClinicalNote.init({
    clinical_record_id: DataTypes.INTEGER,
    date: DataTypes.STRING,
    reasonQuery: DataTypes.STRING,
    observations: DataTypes.STRING,
    diagnosis: DataTypes.STRING,
    planTreatment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ClinicalNote',
  });
  return ClinicalNote;
};