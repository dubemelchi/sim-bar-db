const Sequelize = require('sequelize');
const db = require('../config/database');

const SimBar = db.define('drinks', {
  drink_name: {
    type: Sequelize.STRING
  },
  drink_cost: {
    type: Sequelize.STRING
  }
})

module.exports = SimBar;