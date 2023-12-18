"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        id: 1,
        name: "John",
        email: "john@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Smith",
        email: "smith@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
