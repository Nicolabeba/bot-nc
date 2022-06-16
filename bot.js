const { Client, Intents } = require('discord.js');
//const dbConfig = require('../config/db.config.js');
require('dotenv').config();
const db = require('./models');
const moment = require('moment');

//Bot Discord
const client = new Client();

client.login(process.env.DISCORDJS_BOT_TOKEN);

client.on('ready', () => {
  console.log(`${client.user.tag}`);
  //On instencie la BDD (creation si inexistente ou MAJ si existente) :
  db.sequelize.sync();
  // .sync({ force: true })
  // .then(() => {
  //   console.log('Drop and re-sync db.');
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
});

//Reaction à une commande :
client.on('message', (message) => {
  if (message.content.startsWith(process.env.PREFIX)) {
    // On récupère un tableau des arguments sans le préfixe
    const input = message.content.slice(process.env.PREFIX.length).trim().split(' ');

    // On récupère la commande
    const command = input.shift();
    // On transforme les arguments en chaine de caractères
    const commandArgs = input.join(' ');

    switch (command) {
      // On crée des events à des dates différentes:
      case 'addEvent':
        const options = commandArgs.split('//');
        console.log(options);
        const newEvent = Event.create({
          eventname: options[0],
          message: options[1],
          date: options[2],
        })
          .then(() => {
            message.reply('Commande ajoutée');
          })
          .catch((e) => {
            if (e.name === 'SequelizeUniqueConstaintError') {
              message.reply('cet Event existe déjà');
            }
            message.reply('Une erreur est survenue');
          });
        break;
      //On récupère dans un tableau les events en cours et à venir
    }
  }
});
