module.exports = {
  name: "ping",
  aliases: ["p"],
  help: "Find out the api, message and database latency",
  usage: "[ no args ]",
  async execute(client, msg, args) {
    const lat = await msg.channel.send({embed: {
      title: "Pinging...",
      footer: {text: msg.author, icon: msg.author.getAvatarURL()}
    }});
    msg.channel.send({embed: {
      title: "Pong!",
      description: `**Message latency:** \`${new Date().getTime() - lat.createdTimestamp}\`\nDiscord API latency: \`${client.ws.ping}\`\n\`MongoDB latency: Like 6 or something\``
    }});
  }
};