const {Manager} = require('erela.js');
module.exports = (client) => {
  client.manager = new Manager({
    nodes: [
      client.config.lavalinkNode,
    ],
    send(id, payload) {
      const guild = client.guilds.cache.get(id);
      if (guild) guild.shard.send(payload);
    },
  });
  client.manager.init(client.user.id);
};
