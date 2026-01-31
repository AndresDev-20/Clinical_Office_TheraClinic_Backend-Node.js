'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Patient.belongsTo(models.Office, {
        foreignKey: 'office_id',
        as: "office" 
      })

      Patient.hasMany(models.ClinicalRecord, {
        foreignKey: "patient_id",
        as: "ClinicalRecords"
      })

      Patient.hasMany(models.Appointment, {
        foreignKey: "patient_id",
        as: "Appointment"
      })

      Patient.hasMany(models.Invoice, {
        foreignKey: "patient_id",
        as: "invoices"
      })
    }
  }
  Patient.init({
      firstNames: {
        type: DataTypes.STRING,
        allowNull: false
      },

      lastNames: {
        type: DataTypes.STRING,
        allowNull: false
      },

      age: {
        type: DataTypes.INTEGER,
        allowNull: false
      },

      phone: {
        type: DataTypes.STRING, // Nunca INTEGER
        allowNull: false
      },

      sex: {
        type: DataTypes.ENUM('MASCULINO', 'FEMENINO', 'OTHER'),
        allowNull: false
      },

      cedula: {
        type: DataTypes.STRING, // Nunca INTEGER
        unique: true,
        allowNull: false
      },

      state: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },

      address: {
        type: DataTypes.STRING,
        allowNull: false
      },

      civil_state: {
        type: DataTypes.ENUM('SOLTERO', 'CASADO', 'DIVORCIADO', 'VIUD@', 'UNION LIBRE'),
        allowNull: false
      },

      addiction: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },

      labor_queaser: {
        type: DataTypes.STRING,
        allowNull: true
      },
      office_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};