'use strict';
const { Model } = require('sequelize');



module.exports = (sequelize, DataTypes) => {
  class SessionTokens extends Model{
   static d(){}
  };

  SessionTokens.init({
    refreshToken: {
      type: DataTypes.STRING,
    }, 
  }, {
    sequelize,
    modelName: 'SessionTokens',
  })
  
  return SessionTokens;
}
