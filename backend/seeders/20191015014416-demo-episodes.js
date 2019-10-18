'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
    return queryInterface.bulkInsert('episodes', [
      {
        title: "Ep.1",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Bobo_%28magazine%29.jpg/220px-Bobo_%28magazine%29.jpg",
        from: 1,
        createdAt: new Date(),
        updatedAt : new Date()
      },
      {
        title: "Ep.2",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Bobo_%28magazine%29.jpg/220px-Bobo_%28magazine%29.jpg",
        from: 1,
        createdAt: new Date(),
        updatedAt : new Date()
      },
      {
        title: "Ep.3",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Bobo_%28magazine%29.jpg/220px-Bobo_%28magazine%29.jpg",
        from: 1,
        createdAt: new Date(),
        updatedAt : new Date()
      },
      {
        title: "Ep.4",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Bobo_%28magazine%29.jpg/220px-Bobo_%28magazine%29.jpg",
        from: 1,
        createdAt: new Date(),
        updatedAt : new Date()
      },
      {
        title: "Ep.5",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Bobo_%28magazine%29.jpg/220px-Bobo_%28magazine%29.jpg",
        from: 1,
        createdAt: new Date(),
        updatedAt : new Date()
      },
    
      

      {
        title: "Ep.1",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Bobo_%28magazine%29.jpg/220px-Bobo_%28magazine%29.jpg",
        from: 2,
        createdAt: new Date(),
        updatedAt : new Date()
      },
      {
        title: "Ep.2",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Bobo_%28magazine%29.jpg/220px-Bobo_%28magazine%29.jpg",
        from: 2,
        createdAt: new Date(),
        updatedAt : new Date()
      },
      {
        title: "Ep.3",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Bobo_%28magazine%29.jpg/220px-Bobo_%28magazine%29.jpg",
        from: 2,
        createdAt: new Date(),
        updatedAt : new Date()
      },
      {
        title: "Ep.4",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Bobo_%28magazine%29.jpg/220px-Bobo_%28magazine%29.jpg",
        from: 2,
        createdAt: new Date(),
        updatedAt : new Date()
      },
      {
        title: "Ep.5",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Bobo_%28magazine%29.jpg/220px-Bobo_%28magazine%29.jpg",
        from: 2,
        createdAt: new Date(),
        updatedAt : new Date()
      },


      {
        title: "Ep.1",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Bobo_%28magazine%29.jpg/220px-Bobo_%28magazine%29.jpg",
        from: 3,
        createdAt: new Date(),
        updatedAt : new Date()
      },
      {
        title: "Ep.2",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Bobo_%28magazine%29.jpg/220px-Bobo_%28magazine%29.jpg",
        from: 3,
        createdAt: new Date(),
        updatedAt : new Date()
      },
      {
        title: "Ep.3",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Bobo_%28magazine%29.jpg/220px-Bobo_%28magazine%29.jpg",
        from: 3,
        createdAt: new Date(),
        updatedAt : new Date()
      },
      {
        title: "Ep.4",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Bobo_%28magazine%29.jpg/220px-Bobo_%28magazine%29.jpg",
        from: 3,
        createdAt: new Date(),
        updatedAt : new Date()
      },
      {
        title: "Ep.5",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Bobo_%28magazine%29.jpg/220px-Bobo_%28magazine%29.jpg",
        from: 3,
        createdAt: new Date(),
        updatedAt : new Date()
      }
      
      ], {});
  
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('episodes', null, {});
    
  }
};
