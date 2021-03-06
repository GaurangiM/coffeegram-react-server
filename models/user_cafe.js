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
      user_cafe.belongsTo(models.user)
      user_cafe.belongsTo(models.cafe)
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
    tableName: 'user_cafes'
  });
  return user_cafe;
};