const { Client, Intents } = require('discord.js');
require('dotenv').config();
const db = require('../models');

const client = new Client();

db.sequelize.sync();
// ({ force: true }
//   .then(() => {
//     console.log('Drop and re-sync db.');
//   })
//   .catch((err) => {
//     console.log(err);
//   }));

client.login(process.env.DISCORDJS_BOT_TOKEN);

client.on('ready', () => console.log(`${client.user.tag}`));

client.on('message', (message) => {
  console.log(message.content);
});
