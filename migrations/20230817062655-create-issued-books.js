'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('IssuedBooks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"Categories"
          },
          key:"id"
        },
        allowNull:false
      },
      bookId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"Books"
          },
          key:"id"
        },
        allowNull:false
      },
      userId:{
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"Users"
          },
          key:"id"
        },
        allowNull:false
      },
      days_issued: {
        type: Sequelize.INTEGER
      },
      is_retuned: {
        type: Sequelize.ENUM('1','0'),
        defaultValue:'0'
      },
      status: {
        type: Sequelize.ENUM('1','0')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.literal("CURRENT_TIMESTAMP")
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('IssuedBooks');
  }
};