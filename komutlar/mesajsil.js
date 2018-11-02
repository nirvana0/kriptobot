const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send("**__ :x: Silinecek mesaj adetini yazın__**");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` :white_check_mark: ${args[0]} Adet Mesajı Sildim.`).then(msg => msg.delete(5000));
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil', 'temizle'],
  permLevel: 2
};

exports.help = {
  name: 'mesajsil',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'mesajsil <silinicek mesaj sayısı>'
};