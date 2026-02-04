"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

  class Invoice extends Model {

    static associate(models) {

      Invoice.belongsTo(models.Patient, {
        foreignKey: "patient_id",
        as: "patient",
      });

      Invoice.belongsTo(models.User, {
        foreignKey: "doctor_id",
        as: "doctor",
      });

      Invoice.hasMany(models.InvoiceItem, {
        foreignKey: "invoice_id",
        as: "items",
      });

      Invoice.hasMany(models.Payment, {
        foreignKey: "invoice_id",
        as: "payments",
      });
    }

    // 🔥 Recalcula TOTAL basado en items
    async recalculateTotal() {
      const items = await this.getItems();

      const total = items.reduce(
        (acc, item) => acc + Number(item.subTotal),
        0
      );

      this.total = total;
      await this.save();

      return total;
    }

    // 🔥 Recalcula estado y devuelve balance
    async recalculateStatus() {

      const payments = await this.getPayments();

      const totalPaid = payments.reduce(
        (acc, p) => acc + Number(p.amount),
        0
      );

      const balance = Number(this.total) - totalPaid;

      if (balance <= 0 && Number(this.total) > 0) {
        this.state = "Pagada";
      } else if (totalPaid > 0 && balance > 0) {
        this.state = "Parcial";
      } else {
        this.state = "Pendiente";
      }

      await this.save();

      return balance;
    }

    // 🔥 Devuelve balance sin modificar nada
    async getBalance() {
      const payments = await this.getPayments();

      const totalPaid = payments.reduce(
        (acc, p) => acc + Number(p.amount),
        0
      );

      return Number(this.total) - totalPaid;
    }
  }

  Invoice.init(
    {
      patient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      doctor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      total: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false,
        defaultValue: 0,
        validate: {
          min: 0,
        },
      },

      state: {
        type: DataTypes.ENUM("Pendiente", "Parcial", "Pagada"),
        allowNull: false,
        defaultValue: "Pendiente",
      },
    },
    {
      sequelize,
      modelName: "Invoice",
      tableName: "Invoices",

      hooks: {

        // 🔥 Seguridad: evita totales negativos manuales
        beforeUpdate: (invoice) => {
          if (Number(invoice.total) < 0) {
            throw new Error("El total no puede ser negativo");
          }
        },
      },
    }
  );

  return Invoice;
};