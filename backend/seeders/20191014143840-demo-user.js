'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [
          {
            email: "asta@bobo.com",
            password:"asta",
            username:"Paman Kikuk",
            image:'',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            email: "semar@komik.com",
            password:"kosong",
            username:'Tatang uhui',
            image: '',
            createdAt: new Date(),
            updatedAt: new Date(),
          }
        ], {})
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('users', null, {});

  }
};
