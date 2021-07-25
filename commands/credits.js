exports.run = (client, message) => {
    message.channel.sendMessage('``Credits``')
      .then(msg => {
        message.channel.sendMessage('``Root Bota: Peopu#5807``')
        message.channel.sendMessage('``Mod Bota: ``')
      });
  };

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['credits'],
    permLevel: 0
  };

exports.help = {
    name: 'credits',
    description: 'Ważne osoby dla bota. PV:0',
    usage: 'p.credits'
  };