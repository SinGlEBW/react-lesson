'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Images extends Model {
   
    static associate(models) {
      // define association here
    }
  };
  Images.init({
    name: DataTypes.STRING,
    src: DataTypes.STRING,
    alt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Images',
    
  });
  
  return Images;
};