'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payments.belongsTo(models.Invoice, {
        foreignKey: "invoice_id",
        as: "invoice"
      })
    }
  }
  Payments.init({
    invoice_id: DataTypes.INTEGER,
    monto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payments;
};