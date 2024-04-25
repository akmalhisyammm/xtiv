'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const tags = [
      {
        name: 'Sport',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hobby',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Automotive',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Education',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fashion',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Tags', tags);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null);
  }
};
