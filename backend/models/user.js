'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    user.belongsToMany(models.toon,{
      through: 'favorite',
      as: 'toons',
      foreignKey: 'user_id',
      otherKey: 'webtoon_id'
    })
  };
  return user;
};