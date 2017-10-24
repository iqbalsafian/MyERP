'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('entities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      entityid: {
        type: Sequelize.STRING,
        allowNull: true
      },
      parent_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      password_digest: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fullname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: true
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: true
      },
      designation: {
        type: Sequelize.STRING,
        allowNull: true
      },
      department_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      address1: {
        type: Sequelize.STRING,
        allowNull: true
      },
      address2: {
        type: Sequelize.STRING,
        allowNull: true
      },
      postcode: {
        type: Sequelize.STRING,
        allowNull: true
      },
      city: {
        type: Sequelize.STRING,
        allowNull: true
      },
      state: {
        type: Sequelize.STRING,
        allowNull: true
      },
      country: {
        type: Sequelize.STRING,
        allowNull: true
      },
      isstaff: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      isdepartment: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      iscustomer: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      issupplier: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      isfixedasset: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      isonline: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      isallowedtologin: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
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
    return queryInterface.dropTable('entities');
  }
};
