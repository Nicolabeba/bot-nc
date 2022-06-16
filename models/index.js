//const dbConfig = require('../config/db.config.js');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './discordbotnc.sqlite',
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.event = require('./event.model.js')(sequelize, Sequelize.DataTypes);

module.exports = db;
