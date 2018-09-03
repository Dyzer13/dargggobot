const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-hi'

client.on('ready', () => { //console.log
  console.log('--------------------------');
  console.log(' Bot Is Online')
  console.log('--------------------------')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('--------------------------')
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('--------------------------')
  console.log(`servers! * [ " ${client.guilds.size} " ]`);
  console.log('--------------------------')
  console.log(` Users! * [ " ${client.users.size} " ]`);
  console.log('--------------------------')
  console.log(`channels! * [ " ${client.channels.size} " ]`);
 
  });

 

client.login(process.env.BOT_TOKEN1);
