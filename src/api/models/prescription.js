'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prescription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Prescription.belongsTo(models.Product, {
        
      })
    }
  }
  Prescription.init({
    clinical_notes_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    dose: DataTypes.STRING,
    frequency: DataTypes.STRING,
    duration: DataTypes.STRING,
    observaciones: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Prescription',
  });
  return Prescription;
};