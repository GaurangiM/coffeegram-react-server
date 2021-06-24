'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.user_cafe)
    }
  };
  user.init({
    firstName: { type: DataTypes.STRING, allowNull: false},
    lastName: { type: DataTypes.STRING, allowNull: false},
    email: { type: DataTypes.STRING, allowNull: false, unique: true},
    password: { type: DataTypes.STRING, allowNull: false},
    avatar: {type: DataTypes.STRING, unique: true},
    bio: {type: DataTypes.STRING, unique: true}
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};