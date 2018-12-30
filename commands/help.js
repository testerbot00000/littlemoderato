const Discord = require("discord.js");


  

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.RichEmbed()
    .setColor('#F1C40F')
    .setAuthor('Bot Prefix [ +help ]')
    .setTitle('All Commands')
    .addField('ban', 'ban @user <reason>')
    .addField('clean', 'Prunes 2 to 1000 messages')
    .addField('dm', 'dm @user <text>')
    .addField('info', 'Get Usage Statistics')
    .addField('kick', 'kick @user <reason>')
    .addField('ping', 'Show Current Ping')
    .addField('say', 'Say from the name of the bot')
    .addField('avatar', 'Get User Avatar')
    .setFooter('Patron Support');
    
    message.channel.send({embed})
    
      }
      
module.exports.help = {
    name: "help"
}
