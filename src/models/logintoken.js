'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class logintoken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  logintoken.init({
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'logintoken',
  });
  return logintoken;
};