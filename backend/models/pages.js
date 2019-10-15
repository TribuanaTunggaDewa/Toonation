'use strict';
module.exports = (sequelize, DataTypes) => {
  const pages = sequelize.define('pages', {
    page: DataTypes.INTEGER,
    image: DataTypes.STRING,
    from: DataTypes.INTEGER
  }, {});
  pages.associate = function(models) {
    // associations can be defined here
    pages.belongsTo(models.episodes, {
        as: 'from_episodes',
        foreignKey: 'from'
    })
  };
  return pages;
};