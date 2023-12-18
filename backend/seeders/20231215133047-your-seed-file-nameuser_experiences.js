"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("user_experiences", [
      {
        user_id: 1,
        title: "bla",
        desc: "lorem asd",
        about: "about1",
        tags: "tag me",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        title: "Smith",
        desc: "lorem 231",
        about: "about2",
        tags: "tag me2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("user_experiences", null, {});
  },
};
