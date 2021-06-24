'use strict';
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "test",
          lastName: "test",
          email: "test@test.com",
          password: bcrypt.hashSync("test123", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Charlie",
          lastName: "Brown",
          email: "charliebrown@a.com",
          password: bcrypt.hashSync("charlie", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Tom",
          lastName: "Jerry",
          email: "tomjerry@a.com",
          password: bcrypt.hashSync("tom", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Donald",
          lastName: "Duck",
          email: "donaldduck@a.com",
          password: bcrypt.hashSync("donald", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Yogi",
          lastName: "Bear",
          email: "yogibear@a.com",
          password: bcrypt.hashSync("yogi", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Bugs",
          lastName: "Bunny",
          email: "bugsbunny@a.com",
          password: bcrypt.hashSync("bugs", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  }
};
