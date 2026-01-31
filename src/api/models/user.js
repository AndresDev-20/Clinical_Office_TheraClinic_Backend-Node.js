'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, {
        foreignKey: 'role_id',
        as: "role"
      })

      User.hasMany(models.ClinicalRecord, {
        foreignKey: "doctor_id",
        as: "clinicalRecords"
      })

      User.hasMany(models.Appointment, {
        foreignKey: "doctor_id",
        as: "appointments"
      })

      User.hasMany(models.Invoice, {
        foreignKey: "doctor_id",
        as: "invoices"
      })
    }
  }
  User.init({
    names: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cc: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};