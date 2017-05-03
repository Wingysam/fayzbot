/*jshint
esversion: 6
*/
var config = require(__dirname + '/config.json');
const Discord = require('discord.io');
const bot = new Discord.Client({
    autorun: true,
    token: config.token
});

bot.on('ready', function(event) {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message.startsWith(config.prefix + 'ping')) {
        bot.sendMessage({
            to: channelID,
            message: "pong"
        });
    }
    else if (message.startsWith(config.prefix + 'fayz')) {
        bot.sendMessage({
            to: channelID,
            message: "http://gone.wikia.com/wiki/WikiFAYZ"
        });
    }
});
