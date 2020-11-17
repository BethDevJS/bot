const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json');
const { readdirSync } = require("fs")

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  if (config.allowedStatuses.some(status => status !== config.status)) {
    console.log("[Warning] The status has been set incorrectly, please refer to the config.json and pick a status")
    config.status = "dnd"
  }
  client.user.setPresence({
    activity: {name: 'https://github.com/good-discord-bot/bot', type: 'LISTENING'},
    status: config.status ? config.status : 'dnd'});

  // hold info under client for global access
  client.commands = new Discord.Collection();
  client.config = config;

  // set command handler 
  const cmdFiles = readdirSync("./commands").filter(f => f.endsWith(".js"));
  for (const file of cmdFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    console.log(`${command.name} was loaded`)
  };
});


client.login(config.token);
