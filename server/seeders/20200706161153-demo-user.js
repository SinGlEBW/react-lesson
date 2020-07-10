'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    return queryInterface.bulkInsert('Users', [{
      nickname: 'John',
      name: 'Doe',
      email: 'example@example.com',
      avatar: '/image/ss.jpg',
      password: 123,
      age: 28,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

