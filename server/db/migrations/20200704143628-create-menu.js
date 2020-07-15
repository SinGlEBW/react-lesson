'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('menus', {
     
      id: {
        allowNull: false,//допускает ли поле отсутствие значение.
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.JSON
      },
      src: {
        type: Sequelize.STRING
      },
      submenu: {
        type: Sequelize.JSON,
        references: {//можно передать как-то ссылку на модель
          model: {
            tableName: 'users',
            schema: 'schema'
          },
          key: 'id'
        },
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
    await queryInterface.dropTable('menus');
  }
};


/*
  Что бы параметры таблицы не передавать с кавычками "CURRENT_TIMESTAMP"
  Нужно использовать Sequelize.literal()
*/