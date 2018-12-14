const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const m = await message.channel.send("Измерение");
    m.edit('Ping');
    m.edit(`P---`);
    m.edit(`PO--`);
    m.edit(`PONN-`);
    m.edit(`PONG`);
    m.edit(`Пинг **${Math.round(bot.ping)}** мс`)
      }
module.exports.help = {
    name: "ping"
}