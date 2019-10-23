'use strict';
module.exports = (sequelize, DataTypes) => {
  const toon = sequelize.define('toon', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    isFavorite: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    createdBy: DataTypes.INTEGER
  }, {});
  toon.associate = function(models) {
    // associations can be defined here
    toon.belongsTo(models.user,{
      as: 'created_by',
      foreignKey: 'createdBy'
    })

    toon.belongsToMany(models.user,{
      through: 'favorite',
      as: 'users',
      foreignKey: 'webtoon_id',
      otherKey: 'user_id'
    })
  };
  return toon;
};