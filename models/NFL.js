'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NFL extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NFL.init({
    team: DataTypes.STRING,
    name: DataTypes.STRING,
    hp: DataTypes.INTEGER,
    type: DataTypes.STRING,
    image: DataTypes.STRING,
    attackOne: DataTypes.STRING,
    attackOneCost: DataTypes.INTEGER,
    attackOneHP: DataTypes.INTEGER,
    attackTwo: DataTypes.STRING,
    attackTwoCost: DataTypes.INTEGER,
    attackTwoHP: DataTypes.INTEGER,
    weaknessType: DataTypes.STRING,
    resistanceType: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'NFL',
    tableName: 'nfls',
    timestamps:false
  });
  return NFL;
};