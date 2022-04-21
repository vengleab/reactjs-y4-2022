const { Sequelize } = require('sequelize');;

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('article_management', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize