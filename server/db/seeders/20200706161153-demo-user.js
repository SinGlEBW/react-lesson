'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    return queryInterface.bulkInsert('Users', [{
      login: 'John',
      name: 'Doe',
      email: 'example@example.com',
      avatar: '/image/ss.jpg',
      password: 123,
      age: 28,
      
      avatar: './image/av.jpg',
      
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

