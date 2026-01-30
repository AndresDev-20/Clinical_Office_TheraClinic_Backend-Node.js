'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InvoiceItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      InvoiceItem.belongsTo(models.Invoice, {
        foreignKey: "invoice_id",
        as: "invoice"
      })

      InvoiceItem.belongsTo(models.Product, {
        foreignKey: "product_id",
        as: "product"
      })
    }
  }
  InvoiceItem.init({
    invoice_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    amount: DataTypes.STRING,
    unitPrice: DataTypes.STRING,
    subTotal: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'InvoiceItem',
  });
  return InvoiceItem;
};