const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**BOTBİLGİ**")
        .setThumbnail("https://cdn.discordapp.com/icons/444183148352241665/2018ce7ea57a1bf643a3ca4a9c811f4a.jpg")
        .setColor(0x00AE86)
        .addField("Bot Sahibi", "@.✧Иîяvαиα✧.#2739 ", true)
   .addField("Bot Sahibinin Sunucusu", `
   https://discord.gg/jZYKXJ9`, true)
   .addField("Bot Davet Linki", "https://discordapp.com/oauth2/authorize?client_id=505849770452058112&scope=bot&permissions=2146958847")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'botbilgi', 
  description: 'Bot hakkında bilgi verir.',
  usage: 'botbilgi'
};
