const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    activity: {name: 'https://github.com/good-discord-bot/bot', type: 'LISTENING'},
    status: config.status ? config.status : 'dnd'});
});


client.login(config.token);
