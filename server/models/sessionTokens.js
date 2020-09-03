'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SessionTokens extends Model{
    
  };

  SessionTokens.init({
    userId: {
      type: DataTypes.INTEGER,
     
    },
    token: DataTypes.STRING,
   
  }, {
    sequelize,
    modelName: 'SessionTokens',
  })//.sync({ alter: true })

  return SessionTokens;
}