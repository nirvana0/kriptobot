const Discord = require('discord.js');

const cevaplar = [
    "evet",
    "hayır",
    "belki",
    "olabilir",
    "yoo",
    "imkansız",
    "benimle dalga mı geçiyosun?",
    "hadi işine kardeşim",
    "asla mümkün değil",
    "taşak mı geçiyon kardeş",
    "neden olmasın?",
    "evet öyle",
    "kesinlikle",
    "katılıyorum",
    "tabiki hayır cahilmisin?"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir soru belirt. **Cevabı evet, hayır ve benzeri olan sorularınızı cevaplar.**: .sor <soru>')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'sor', 
  description: 'Cevabı evet, hayır ve benzeri olan sorularınızı cevaplar.',
  usage: 'sor <soru>'
};