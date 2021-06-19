'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cafe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cafe.hasMany(models.image)
      cafe.hasOne(models.address)
      
    }
  };
  cafe.init({
    name: { type: DataTypes.STRING, allowNull: false},
    description: { type: DataTypes.TEXT, allowNull: false},
    contact: { type: DataTypes.STRING},
    imageUrl: { type: DataTypes.TEXT, allowNull: false}
  }, {
    sequelize,
    modelName: 'cafe',
  });
  return cafe;
};