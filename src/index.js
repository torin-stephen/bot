const DiscordCreateClient = require('./Structures/DiscordCreateClient');
const config = require('../config.json');

const client = new DiscordCreateClient(config);
client.start();