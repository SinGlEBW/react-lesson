'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      login: { type: Sequelize.STRING, unique: true},
      name: Sequelize.STRING, 
      email: { type: Sequelize.STRING, unique: true},
      password: Sequelize.STRING,
      avatar: Sequelize.STRING,
      age: Sequelize.DATE,
      role: Sequelize.STRING,
      phone: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
