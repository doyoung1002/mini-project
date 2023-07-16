'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      commentId: {
        allowNull: false, // NOT NULL
        autoIncrement: true, // AUTO_INCREMENT
        primaryKey: true, // Primary Key (기본키)
        type: Sequelize.INTEGER
      },
      ItemId: {
        allowNull: false, // NOT NULL
        type: Sequelize.INTEGER,
        references: {
          model: 'Items',
          key: 'itemId',
        },
        onDelete: 'CASCADE',
      },
      nickname: {
        allowNull: false, // NOT NULL
        type: Sequelize.STRING
      },
      password: {
        allowNull: false, // NOT NULL
        type: Sequelize.STRING
      },
      comment: {
        allowNull: false, // NOT NULL
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false, // NOT NULL
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      },
      updatedAt: {
        allowNull: false, // NOT NULL
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Comments');
  }
};