'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Invoice.belongsTo(models.Patient, {
        foreignKey: "patient_id",
        as: "patient"
      })

      Invoice.belongsTo(models.User, {
        foreignKey: "doctor_id",
        as: "doctor"
      })

      Invoice.hasMany(models.InvoiceItem, {
        foreignKey: "invoice_id",
        as: "InvoiceItems"
      })

    }
  }
  Invoice.init({
    patient_id: DataTypes.INTEGER,
    doctor_id: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Invoice',
  });
  return Invoice;
};