const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You are not an administrator!");

    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Specify a valid Member of this server");
    if(!member.bannable) 
      return message.reply("I can not `Ban` this user! Do they have a higher role? Do I have permission to do this?");
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Reason Unspecified!";
    
    await member.ban(reason)
      .catch(error => message.reply(`I Can't Ban ${message.author} Error ${error} `));
    message.reply(`${member.user.tag} Was Banned ${message.author.tag} For a Reason ${reason} `);
     
      }
module.exports.help = {
    name: "ban"
}