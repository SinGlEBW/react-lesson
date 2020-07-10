'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static loginFromModels = (user) => {
      
    }
    static associate(models) {
      // define association here
    }
  };
  User.init({
    login: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    phone: DataTypes.DECIMAL,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    
  });
  return User;
};
