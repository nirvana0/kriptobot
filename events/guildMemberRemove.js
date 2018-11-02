module.exports = member => {
    let guild = member.guild;
    member.send('niye çıktın lan? hava yapma kırarım kafanı');
    guild.defaultChannel.sendMessage(`${member.user.username} siktir lan ipneye bak hava yapıyo bide çıkarsan çık amk `);
  };