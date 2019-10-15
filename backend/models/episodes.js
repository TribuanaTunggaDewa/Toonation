'use strict';
module.exports = (sequelize, DataTypes) => {
  const episodes = sequelize.define('episodes', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    from: DataTypes.INTEGER
  }, {});
  episodes.associate = function(models) {
    // associations can be defined here
    episodes.belongsTo(models.toon,{
      as: 'from_toons',
      foreignKey: 'from'
    })
  };
  return episodes;
};