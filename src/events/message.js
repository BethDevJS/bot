module.exports = (client, msg) => {
  if (msg.author.bot || msg.content.startsWith(client.config.prefix)) return;
  const args = msg.content.slice(client.config.prefix.length).split(/ +/g);
  // You said you couldn't get it to work so add some debugging
  try {
    console.log("Command found")
    const command = client.commands.get(args[0]) || client.commands.find(c => c.aliases == args[0]);
    return command.execute(client, msg, args)
  } catch {
    console.log("Command not found")
    return;
  }
}
