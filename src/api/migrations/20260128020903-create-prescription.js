'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Prescriptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clinical_notes_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "ClinicalNotes",
          key: "id"
        }
      },
      product_id: {
        type: Sequelize.INTEGER
      },
      dose: {
        type: Sequelize.STRING
      },
      frequency: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      },
      observaciones: {
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
    await queryInterface.dropTable('Prescriptions');
  }
};