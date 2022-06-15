const { Client, Intents } = require('discord.js');
require('dotenv').config();
//const { sequelize } = require('sequelize');

const client = new Client();

client.login(process.env.DISCORDJS_BOT_TOKEN);

client.on('ready', () => console.log(`${client.user.tag}`));

client.on('message', (message) => {
  console.log(message.content);
});
