const { Sequelize, DataTypes } = require('sequelize');
const dbConnection = require("../db/connection")

const User = dbConnection.define('User', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: DataTypes.STRING,
  password: DataTypes.STRING
}, {
  tableName: "users",
  timestamps: false,
});

module.exports = User;