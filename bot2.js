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

 
client.on('message', message => {
var prefix = "$!$";

  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 471788143637430273) return;


if (message.content.startsWith(prefix + 'playing')) {
  if (message.author.id !== '337629134371160065') return message.reply('**only for the botowner **')
client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}** : Playing changed to`)
    message.react("ðŸ‘Œ")

} else

if (message.content.startsWith(prefix + 'setname')) {
  if (message.author.id !== '471788143637430273') return message.reply('**only for the botowner **')
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : done`)
} else

if (message.content.startsWith(prefix + 'stream')) {
  if (message.author.id !== '471788143637430273') return message.reply('**only for the botowner **')
client.user.setGame(argresult, "https://www.twitch.tv/0rzh0");
    message.channel.sendMessage(`**${argresult}** streem changed to`)
    message.react("ðŸ‘Œ")

} else

if (message.content.startsWith(prefix + 'watching')) {
  if (message.author.id !== '471788143637430273') return message.reply('**only for the botowner **')
    client.user.setActivity(argresult, {type : 'watching'});
 message.channel.sendMessage(`**${argresult}** : Watching changed to`)
 message.react("ðŸ‘Œ")

} else
	
if (message.content.startsWith(prefix + 'listening')) {
  if (message.author.id !== '471788143637430273') return message.reply('**only for the botowner **')
client.user.setActivity(argresult);
    message.channel.sendMessage(`**${argresult}** : listening changed to`)
    message.react("ðŸ‘Œ")
	
} else

if (message.content.startsWith(prefix + 'setavatar')) {
if (message.author.id !== '471788143637430273') return message.reply('**only for the botowner **')
client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** :avatar changed to`);
	message.react("ðŸ‘Œ")
}
 });
 







//client.on('ready', () => {
   // setInterval(function(){
  //      client.guilds.get('471788143637430273').roles.find('name', 'big boos').edit({color: 'RANDOM'})
 //   },1);
//	});


//client.on('ready', () => {
 //   setInterval(function(){
      //  client.guilds.get('471788143637430273').roles.find('name', '⚔ ≺Captain≻⚔').edit({color: 'RANDOM'})
 //   },1);
//	});



          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "support"){ 
          const embed = new Discord.RichEmbed()
.setColor("#5016f3")
 .setThumbnail(client.user.avatarURL)     
 .setTimestamp()
 .setDescription("DyzerYT | هلا فيك في سيرفر  " + `
 **
support | رابط سيرفر    https://discord.gg/VXmkxJRE
 **
`);


   message.channel.send({embed});
      }
  });

client.login(process.env.BOT_TOKEN1);
