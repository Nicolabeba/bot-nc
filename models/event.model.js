const Sequelize = require('sequelize');

module.export = (sequelize, Datatypes) => {
  return sequelize.define('event', {
    command: {
      type: Sequelize.STRING,
      unique: true,
    },
    message: Sequelize.TEXT,
    deleteMessage: Sequelize.BOOLEAN,
  });
};
