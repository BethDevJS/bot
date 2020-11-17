module.exports = (client, msg) => {
  if (msg.author.bot || msg.content.startsWith(client.config.prefix)) return;
}