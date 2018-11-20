const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      const embed = new Discord.RichEmbed()
      
      .setColor('#E74C3C')
      .setTitle('All Commands')
      .addField('Bot Owner', 'Lime#1224 Tag and Nick Owner Unchanged')
      .addField('Support Server', 'http://bit.do/modsupport')
      .addField('Invite Bot', 'http://bit.do/modinvite')
      .addField('code', 'Code Created by Lime # 1224')
      .addField('Thanks', 'Kick User Example + kick @mention <Reason>')
      .addField('ban', 'Thanks to Heroku for a Free Host')
      .setFooter(`Little Moderator `, `${message.author.displayAvatarURL}`)
      

      message.author.send({embed});
}
module.exports.help = {
    name: "info"
}