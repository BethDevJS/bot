const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json');
const {readdirSync} = require('fs');
module.exports = () => {
  client.on('ready', () => {
    if (!require('./functions/validateConfig')(config)) {
    // eslint-disable-next-line max-len
      throw new Error('Your config is incorrect! Please check it or use our config generator!');
    }
    if (config.lavalinkNode.hostname) require('./manager/music')(client);
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
      activity: {name: 'https://github.com/good-discord-bot/bot', type: 'LISTENING'},
      status: config.status});

    // hold info under client for global access
    client.commands = new Discord.Collection();
    client.config = config;

    // set command handler
    const cmdFiles = readdirSync('./src/commands')
        .filter((f) => f.endsWith('.js'));
    for (const file of cmdFiles) {
      if (file.includes('music') && !config.lavalinkNode) return;
      const command = require(`./commands/${file}`);
      client.commands.set(command.name, command);
      console.log(`${command.name} was loaded`);
    };
    const eventFiles = readdirSync('./src/events')
        .filter((f) => f.endsWith('.js'));
    for (const file of eventFiles) {
      const event = require(`./event/${file}`);
      const eventName = file.split('.')[0];
      client.on(eventName, event.bind(null, client));
      console.log(`${command.name} was loaded`);
    };
  });

  client.on('error', (err) => {
    console.error(err);
  });

  client.login(config.token);
};
