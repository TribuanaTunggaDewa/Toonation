'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('toons', [
        {
          title: "True Ugly",
          genre:"Drama",
          isFavorite: false,
          image: "https://www.forbes.com/sites/joanmacdonald.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy:1
        },
        {
          title: "A Good Day to be a bug",
          genre:"Drama",
          isFavorite: true,
          image: "https://www.forbes.com/sites/joanmacdonald.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy:1
        }
      ], {})
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('toons', null, {});

  }
};
