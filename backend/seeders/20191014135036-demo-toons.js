'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('toons', [
        {
          title: "True Ugly",
          genre:"Drama",
          isFavorite: false,
          image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Bobo_%28magazine%29.jpg/220px-Bobo_%28magazine%29.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy:1
        },
        {
          title: "A Good Day to be a bug",
          genre:"Drama",
          isFavorite: true,
          image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Bobo_%28magazine%29.jpg/220px-Bobo_%28magazine%29.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy:1
        },
        {
          title: "True Ugly",
          genre:"Drama",
          isFavorite: false,
          image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Bobo_%28magazine%29.jpg/220px-Bobo_%28magazine%29.jpg",
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
