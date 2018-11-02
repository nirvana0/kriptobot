const Discord = module.require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {

  let Timer = args[0];

  if(!args[0]){
    return message.reply(":x: " + "Kardeş bi süre belirt. SAAT=h  DAKİKA=m  SANİYE=s");
  }

  if(args[0] <= 0){
    return message.reply(":x: " + "Kardeş bi süre belirt. SAAT=h  DAKİKA=m  SANİYE=s");
  }

  message.reply(":white_check_mark:  Zamanlayıcı başladı")

  setTimeout(function(){
    message.reply("Süre bitti bro uyandırayım dedim.")

  }, ms(Timer));
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 2
  };
  
  exports.help = {
    name: 'zamanlayıcı',
    description: 'Zamanlayıcı',
    usage: 'zamanlayıcı <süre> (saat=h dakika=m saniye=s)'
  };
  