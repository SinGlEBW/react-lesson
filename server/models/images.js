"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Images extends Model {
    static associate(models) {
      
    }
  }
  Images.init(
    {
      name: DataTypes.STRING,
      src: DataTypes.STRING,
      alt: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Images",
    }
  );
  // Images.sync()
  return Images;
};
