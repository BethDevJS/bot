const status = ['invisible', 'dnd', 'online', 'idle'];
/**
 * @param {object} config A config object from good-discord-bot
 * @return {boolean} Config valid?
 */
function validateConfig(config) {
  if (!config.token) return false;
  if (!config.mongoURI) return false;
  if (!config.prefix) return false;
  if (status.some((status) => status !== config.status)) {
    // eslint-disable-next-line max-len
    console.log('[Warning] The status has been set incorrectly, please check it against the readme and pick a status');
    config.status = 'dnd';
    return true;
  }
}
module.exports = validateConfig;
