const Discord = require("discord.js");


  

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.RichEmbed()
    .setColor('#F1C40F')
    .setAuthor('Bot Prefix [ mod! ]')
    .setTitle('All Commands')
    .addField('ban', 'ban <@mention> <reason>')
    .addField('clean', 'clean <2> - <200>')
    .addField('dm', 'dm <@mention> <text>')
    .addField('info', 'Get Usage Statistics')
    .addField('kick', 'kick <@mention> <reason>')
    .addField('ping', 'show current ping')
    .addField('say', 'Say from the name of the bot')
    .addField('avatar', 'Get User Avatar')
    .setFooter('Little Moderator');
    
    message.channel.send({embed})
    
      }
      
module.exports.help = {
    name: "help"
}
