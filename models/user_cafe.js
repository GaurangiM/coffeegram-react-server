'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_cafe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  };
  user_cafe.init({
    review: { type: DataTypes.TEXT, allowNull: false},
    rating: { type: DataTypes.FLOAT, allowNull: false},
    visitDate: DataTypes.DATE,
    cafeImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: "user_cafe",
  });
  return user_cafe;
};