const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!dUser) return message.channel.send("Can't Find User")
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You do not have rights to use")
    let dMessage = args.join(" ").slice(22);
    if(dMessage.length < 1) return message.reply('Your Message Too Small')
    
    dUser.send(`** You received a Message ** ${dMessage}`)
    
    message.author.send(`${message.author} You Sent a Message With Text **${dMessage}** User ${dUser} Received a Message`)
      }
module.exports.help = {
    name: "dm"
}