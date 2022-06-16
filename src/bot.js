const { Client, Intents } = require('discord.js');
require('dotenv').config();
const db = require('../models');

const client = new Client();

client.login(process.env.DISCORDJS_BOT_TOKEN);

client.on('ready', () => {
  console.log(`${client.user.tag}`);
  db.sequelize.sync();
  // ({ force: true }
  //   .then(() => {
  //     console.log('Drop and re-sync db.');
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   }));
});

client.on('message', (message) => {
  console.log(message.content);
});
