const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const m = await message.channel.send(`Number of Servers That Have a Bot ${bot.guilds.size}`)
    message.channel.send(`Number of Users Who Use Bot ${bot.users.size}`);
      }
module.exports.help = {
    name: "info"
}
