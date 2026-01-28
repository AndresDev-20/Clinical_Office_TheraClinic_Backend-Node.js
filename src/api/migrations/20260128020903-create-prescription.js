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
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "products",
          key: "id"
        }
      },
      dose: {
        type: Sequelize.STRING,
        allowNull: false
      },
      frequency: {
        type: Sequelize.STRING,
        allowNull: false
      },
      duration: {
        type: Sequelize.STRING,
        allowNull: false
      },
      observaciones: {
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
    await queryInterface.dropTable('Prescriptions');
  }
};