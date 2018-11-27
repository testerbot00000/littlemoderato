const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
      const embed = new Discord.RichEmbed()
      
          .setColor('#E74C3C')
          .setTitle('All Commands')
          .addField('say', 'Say from the name of the bot into the current channel')
          .addField('dm', 'Send To PM On behalf of Bot')
          .addField('clean', 'Clear Chat From 2 Post To 200')
          .addField('kick', 'Kick User Example + kick @mention <Reason>')
          .addField('ban', 'Ban User + ban @mention <Reason>')
          .addField('Info','Get Inforamtion')
          .setFooter(`Little Moderator Help`, `${message.author.displayAvatarURL}`)
          
      
          message.author.send({embed});
      }
module.exports.help = {
    name: "help"
}
