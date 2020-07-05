'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
 
    static associate(models) {
      // define association here
    }
  };
  Menu.init({
    name: DataTypes.JSON,
    src: DataTypes.STRING,
    submenu: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};