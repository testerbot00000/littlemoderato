﻿const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require("fs");
const ms = require("ms");
const ytdl = require('ytdl-core');
require('http').createServer().listen(3000)
bot.commands = new Discord.Collection();
fs.readdir("./commands", (err, files) => {
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Не могу найти команды!");
        return;
    }

    jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} Команда Загружена`);
    bot.commands.set(props.help.name, props);
    });

});

bot.login(process.env.BOT_TOKEN);


bot.on('message', async message => {
    if(message.author.bot) return;
    let prefix = 'mod!';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);
});
bot.on('ready', () => {
    bot.user.setPresence({
        game:{
            name:`mod!help`,
            type:"",
            url:""
        }
    });  
