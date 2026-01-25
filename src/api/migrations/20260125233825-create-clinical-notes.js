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
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      reasonQuery: {
        type: Sequelize.STRING
      },
      observations: {
        type: Sequelize.STRING
      },
      diagnosis: {
        type: Sequelize.STRING
      },
      planTreatment: {
        type: Sequelize.STRING
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