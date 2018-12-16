const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
const g = bot.guilds.map(m => `${m.name} [${m.id}]`).join('\n\n');
console.log(g);
      }
module.exports.help = {
    name: "servers"
}
