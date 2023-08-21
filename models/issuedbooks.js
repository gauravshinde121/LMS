'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IssuedBooks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  IssuedBooks.init({
    categoryId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    days_issued: DataTypes.INTEGER,
    is_retuned: DataTypes.ENUM('1','0'),
    status: DataTypes.ENUM('1','0')
  }, {
    sequelize,
    modelName: 'IssuedBooks',
  });
  return IssuedBooks;
};