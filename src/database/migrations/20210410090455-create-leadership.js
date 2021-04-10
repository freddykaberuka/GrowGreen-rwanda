'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Leaderships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      names: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      facebookAcc: {
        type: Sequelize.STRING
      },
      twitterAcc: {
        type: Sequelize.STRING
      },
      moreOn: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Leaderships');
  }
};