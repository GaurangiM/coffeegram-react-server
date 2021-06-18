'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      address.belongsTo(models.cafe)
    }
  };
  address.init({
    postCode: { type: DataTypes.STRING, allowNull: false},
    houseNumber: { type: DataTypes.INTEGER, allowNull: false, unique: true},
    houseNumberExt: { type: DataTypes.STRING},
    streetName: { type: DataTypes.STRING, allowNull: false},
    city: { type: DataTypes.STRING, allowNull: false},
    latitude: { type: DataTypes.FLOAT, allowNull: false},
    longitude: { type: DataTypes.FLOAT, allowNull: false}
  }, {
    sequelize,
    modelName: 'address',
  });
  return address;
};