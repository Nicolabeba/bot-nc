const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    eventname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    message: Sequelize.TEXT,
    date: Sequelize.DATEONLY,
  });
  return Event;
};
