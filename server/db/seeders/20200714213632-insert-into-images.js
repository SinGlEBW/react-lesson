'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    queryInterface.bulkInsert('images', [
      
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
