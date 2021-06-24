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
          avatar: "https://cdn5.vectorstock.com/i/thumb-large/85/39/profile-icon-senior-female-head-in-chat-bubble-vector-23798539.jpg",
          bio: "My birthstone is a Coffee Bean !"
        },
        {
          firstName: "Charlie",
          lastName: "Brown",
          email: "charliebrown@a.com",
          password: bcrypt.hashSync("charlie", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
          avatar: "https://cdn4.vectorstock.com/i/thumb-large/15/53/young-african-american-woman-profile-avatar-vector-34601553.jpg",
          bio: "I orchestrate my mornings to the tune of coffee."
        },
        {
          firstName: "Tom",
          lastName: "Jerry",
          email: "tomjerry@a.com",
          password: bcrypt.hashSync("tom", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
          avatar: "https://cdn3.vectorstock.com/i/thumb-large/60/72/girl-avatar-in-circle-vector-36216072.jpg",
          bio: "Everyone should believe in something. I believe I will have another coffee."
        },
        {
          firstName: "Donald",
          lastName: "Duck",
          email: "donaldduck@a.com",
          password: bcrypt.hashSync("donald", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
          avatar: "https://cdn4.vectorstock.com/i/thumb-large/85/28/profile-icon-senior-male-head-in-chat-bubble-vector-23798528.jpg",
          bio: "More espresso, less depresso !"
        },
        {
          firstName: "Yogi",
          lastName: "Bear",
          email: "yogibear@a.com",
          password: bcrypt.hashSync("yogi", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
          avatar: "https://cdn4.vectorstock.com/i/thumb-large/51/33/brunette-young-man-profile-avatar-beautiful-guy-vector-32425133.jpg",
          bio: "I'd stop drinking coffee, but I am no Quitter."
        },
        {
          firstName: "Bugs",
          lastName: "Bunny",
          email: "bugsbunny@a.com",
          password: bcrypt.hashSync("bugs", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
          avatar: "https://cdn3.vectorstock.com/i/thumb-large/84/92/profile-icon-male-head-in-chat-bubble-isolated-vector-23798492.jpg",
          bio: "Follow your heart, but take Coffee with you !"
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  }
};
