const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const deleteCount = parseInt(args[0], 10);
  
    if(!deleteCount || deleteCount < 2 || deleteCount > 200)
      return message.reply("Please enter a number from 2 to 200 for the number of messages to delete.");
    
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Failed to delete messages due to:${error}`));
      }
module.exports.help = {
    name: "clean"
}