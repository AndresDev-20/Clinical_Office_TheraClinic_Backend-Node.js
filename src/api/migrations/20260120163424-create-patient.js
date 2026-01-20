'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstNames: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastNames: {
        type: Sequelize.STRING,
        allowNull: false
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sex: {
        type: Sequelize.ENUM('MASCULINO', 'FEMENINO', 'OTHER'),
        allowNull: false
      },
      cedula: {
        type: Sequelize.STRING,
        allowNull: false
      },
      state: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      civil_state: {
        type: Sequelize.ENUM('SOLTERO', 'CASADO', 'DIVORCIADO', 'VIUD@', 'UNION LIBRE'),
        allowNull: false
      },
      addiction: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      labor_queaser: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Patients');
  }
};