const { Sequelize, DataTypes } = require('sequelize');
const dbConnection = require("../db/connection")

const Article = dbConnection.define('Article', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: DataTypes.STRING,
  content: DataTypes.STRING
}, {
  tableName: "articles",
  timestamps: false,
});

module.exports = Article;