"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // 🔹 Un producto puede estar en muchas facturas
      Product.hasMany(models.InvoiceItem, {
        foreignKey: "product_id",
        as: "invoiceItems",
      });

      // 🔹 Si manejas prescripciones médicas
      Product.hasMany(models.Prescription, {
        foreignKey: "product_id",
        as: "prescriptions",
      });
    }
  }

  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },

      type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },

      price: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false,
        validate: {
          isDecimal: true,
          min: 0,
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "Products",

      hooks: {
        // 🔥 Normaliza nombre antes de guardar
        beforeCreate: (product) => {
          product.name = product.name.trim();
        },

        beforeUpdate: (product) => {
          product.name = product.name.trim();
        },
      },
    },
  );

  return Product;
};
