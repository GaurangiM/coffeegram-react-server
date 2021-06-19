'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("cafes", "addressId", {
      type: Sequelize.INTEGER,
      references: {
        model: "addresses",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("images", "cafeId", {
      type: Sequelize.INTEGER,
      references: {
        model: "cafes",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("cafes", "addressId");
    await queryInterface.removeColumn("images", "cafeId");
  
  }
};
