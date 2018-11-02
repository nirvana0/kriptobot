const Discord = require('discord.js');


exports.run = function(client, message) {

if (message.author.id !== "435054074455654411") return;
    message.channel.send(" :white_check_mark: **__Bot başarıyla yeniden başlatıldı!__** ").then(msg => {
        console.log("[BOT]Yeniden başlatılıyor");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'yndn', 
  description: 'BU KOMUTU SADECE BOTUN SAHİBİ KULLANABİLİR',
  usage: 'yndn'
};