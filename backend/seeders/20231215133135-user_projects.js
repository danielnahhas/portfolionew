"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("user_projects", [
      {
        user_id: 1,
        title: "blame",
        desc: "lorem dsa",
        img: "img123",
        tags: "tag me112",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        title: "sandra",
        desc: "lorem ads",
        img: "img231",
        tags: "tag me231",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("user_projects", null, {});
  },
};
