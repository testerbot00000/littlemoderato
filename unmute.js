const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            let unmute = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You do not have rights to use this command");
            if(!unmute) return message.reply("You did not specify a User");
            if(unmute.hasPermission("ADMINISTRATOR")) return message.reply("You Can't Mute Administrators");
            let muterole = message.guild.roles.find(`name`, "muted");
            unmute.removeRole(muterole)

}

module.exports.help = {
    name: "unmute"
}
