'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Leadership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Leadership.init({
    names: DataTypes.STRING,
    title: DataTypes.STRING,
    facebookAcc: DataTypes.STRING,
    twitterAcc: DataTypes.STRING,
    moreOn: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Leadership',
  });
  return Leadership;
};