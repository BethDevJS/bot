module.exports = (client, msg) => {
  if (msg.author.bot || msg.content.startsWith(client.config.prefix)) return;
  const args = msg.content.slice(client.config.prefix.length).split(/ +/g);
  try {
    const command = client.commands.get(args[0]) || client.commands.find(c => c.aliases == args[0]);
    return command.execute(client, msg, args)
  } catch {
    return;
  }
}
