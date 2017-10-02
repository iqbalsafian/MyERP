'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('conversation_messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      conversation_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      message: {
        type: Sequelize.STRING
      },
      message_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      entity_id: {
        type: Sequelize.INTEGER
      },
      target_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('conversation_messages');
  }
};
