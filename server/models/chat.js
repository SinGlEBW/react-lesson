'use strict';

const config = require('@config-server/database.json')['chat'];
const { Model, Sequelize } = require('sequelize');


let sequelize = new Sequelize(config.database, config.username, config.password, config);



module.exports = (sequelize, DataTypes) => {
   class User extends Model {
     //тут можем описать свои методы 
     static loginFromModels = (user) => {
       console.dir(11);
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
     age: DataTypes.INTEGER,
     role: DataTypes.STRING,
   }, {
     sequelize,
     modelName: 'User',
     
   });
   
   return User;
 };