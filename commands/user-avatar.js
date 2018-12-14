const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let aurl = message.mentions.users.first() || message.author;
    let avEMB = new Discord.RichEmbed()
    .setColor('#32CD32')
    .setTitle(`Аватар Указаного Пользователя ${aurl.username}`)
    .setImage(aurl.displayAvatarURL);
 message.channel.send(avEMB)
      }
module.exports.help = {
    name: "avatar"
}