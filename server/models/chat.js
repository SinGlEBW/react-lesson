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
    
   }, {
     sequelize,
     modelName: 'Chat',
     
   });
   
   return User;
 };