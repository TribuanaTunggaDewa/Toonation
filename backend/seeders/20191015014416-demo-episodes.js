'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
    return queryInterface.bulkInsert('episodes', [
      {
        title: "Ep.1",
        image: "https://www.forbes.com/sites/joanmacdonald.jpg",
        from: 1,
        createdAt: new Date(),
        updatedAt : new Date()
      },
      {
        title: "Ep.2",
        image: "https://www.forbes.com/sites/joanmacdonald.jpg",
        from: 2,
        createdAt: new Date(),
        updatedAt : new Date()
      },
      {
        title: "Ep.3",
        image: "https://www.forbes.com/sites/joanmacdonald.jpg",
        from: 2,
        createdAt: new Date(),
        updatedAt : new Date()
      }], {});
  
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('episodes', null, {});
    
  }
};
