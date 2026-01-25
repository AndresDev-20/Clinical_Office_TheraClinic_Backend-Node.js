'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ClinicalNotes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clinical_record_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      date: {
        type: Sequelize.STRING,
        allowNull: false
      },
      reasonQuery: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      observations: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      diagnosis: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      planTreatment: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('ClinicalNotes');
  }
};