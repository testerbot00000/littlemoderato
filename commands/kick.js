const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You are not an administrator!");

    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Specify a valid Member of this server");
    if(!member.kickable) 
      return message.reply("I can not `Kick` this user! Do they have a higher role? Do I have permission to do this?");
    
      let reason = args.slice(1).join(' ');
      if(!reason) reason = "Reason Unspecified !";
    
    await member.kick(reason)
      .catch(error => message.reply(`I Can't Kick ${message.author} Error ${error}`));
    message.reply(`${member.user.tag} Kicked by user ${message.author.tag} reason ${reason}`);
      }
module.exports.help = {
    name: "kick"
}