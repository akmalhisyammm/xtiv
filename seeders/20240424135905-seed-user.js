'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const salt = await bcrypt.genSalt(10);
    const users = [{
      username : "admin",
      email    : "admin@xtiv.com",
      password : await bcrypt.hash('admin123', salt),
      role     : "admin",
      createdAt : new Date(),
      updatedAt : new Date()
    }]

    await queryInterface.bulkInsert("Users", users)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Users", null, {})
  }
};
