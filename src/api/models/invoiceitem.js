"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class InvoiceItem extends Model {
    static associate(models) {
      InvoiceItem.belongsTo(models.Invoice, {
        foreignKey: "invoice_id",
        as: "invoice",
      });

      InvoiceItem.belongsTo(models.Product, {
        foreignKey: "product_id",
        as: "product",
      });
    }
  }

  InvoiceItem.init(
    {
      invoice_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
        },
      },

      unitPrice: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false,
        validate: {
          min: 0,
        },
      },

      subTotal: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "InvoiceItem",
      tableName: "InvoiceItems",

      hooks: {
        // 🔥 Calcula subtotal antes de crear
        beforeCreate: (item) => {
          item.subTotal = Number(item.quantity) * Number(item.unitPrice);
        },

        // 🔥 Calcula subtotal antes de actualizar
        beforeUpdate: (item) => {
          item.subTotal = Number(item.quantity) * Number(item.unitPrice);
        },

        // 🔥 Después de crear, recalcula total y estado
        afterCreate: async (item) => {
          const invoice = await item.getInvoice();
          if (!invoice) return;

          await invoice.recalculateTotal();
          await invoice.recalculateStatus();
        },

        // 🔥 Después de actualizar
        afterUpdate: async (item) => {
          const invoice = await item.getInvoice();
          if (!invoice) return;

          await invoice.recalculateTotal();
          await invoice.recalculateStatus();
        },

        // 🔥 Después de borrar
        afterDestroy: async (item) => {
          const invoice = await item.getInvoice();
          if (!invoice) return;

          await invoice.recalculateTotal();
          await invoice.recalculateStatus();
        },
      },
    },
  );

  return InvoiceItem;
};
