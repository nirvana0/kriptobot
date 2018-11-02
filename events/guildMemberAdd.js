module.exports = member => {
    let username = member.user.username;
    member.sendMessage('**Nirvana Sunucusuna Hoşgeldin**' + username + '**!');
    member.guild.defaultChannel.send('**Nirvana Sunucusuna Hoşgeldin**'+username+'');
};