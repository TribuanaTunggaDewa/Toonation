'use strict';
module.exports = (sequelize, DataTypes) => {
  const toon = sequelize.define('toon', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    isFavorite: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    created_by: DataTypes.INTEGER
  }, {});
  toon.associate = function(models) {
    // associations can be defined here
  };
  return toon;
};