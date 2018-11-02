const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`ban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'log');
  if (!modlog) return message.reply('`log` kanalı oluşturman lazım.');
  if (reason.length < 1) return message.reply('niye banlıyorsun adamı onu yazaydın.');
  if (message.mentions.users.size < 1) return message.reply('kimi banlayacağım onu yaz.').catch(console.error);

  if (!message.guild.member(user).ban) return message.reply('Yetkilileri sunucudan atamam.');
  message.guild.member(user).ban();

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Sunucudan yasaklama')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  return guild.channels.get(modlog.id).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yasakla'],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi sunucudan engeller.',
  usage: 'ban [kullanıcı] [sebep]'
};
 