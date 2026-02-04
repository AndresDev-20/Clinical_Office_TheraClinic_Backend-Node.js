"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      Payment.belongsTo(models.Invoice, {
        foreignKey: "invoice_id",
        as: "invoice",
      });
    }
  }

  Payment.init(
    {
      invoice_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      amount: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false,
        validate: {
          min: 0.01,
        },
      },

      method: {
        type: DataTypes.ENUM(
          "Efectivo",
          "Transferencia",
          "Tarjeta",
          "Nequi",
          "Daviplata",
        ),
        allowNull: false,
      },

      payment_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Payment",
      tableName: "Payments",

      hooks: {
        // 🔥 Después de crear un pago, recalcula estado
        afterCreate: async (payment) => {
          const invoice = await payment.getInvoice();

          if (!invoice) return;

          await invoice.recalculateStatus();
        },

        // 🔥 Si actualizas un pago también recalcula
        afterUpdate: async (payment) => {
          const invoice = await payment.getInvoice();

          if (!invoice) return;

          await invoice.recalculateStatus();
        },

        // 🔥 Si borras un pago recalcula
        afterDestroy: async (payment) => {
          const invoice = await payment.getInvoice();

          if (!invoice) return;

          await invoice.recalculateStatus();
        },
      },
    },
  );

  return Payment;
};
