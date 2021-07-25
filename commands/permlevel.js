exports.run = (client, message) => {
    message.channel.sendMessage('``PV:0 - Zwykly Użytkownik``')
      .then(msg => {
        message.channel.sendMessage('``PV:1 - Helper``')
        message.channel.sendMessage('``PV:2 - Administrator serwera``')
        message.channel.sendMessage('``PV:3 - Mod Bota``')
        message.channel.sendMessage('``PV:4 - Root``')
      });
  };

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['pv'],
    permLevel: 0
  };

exports.help = {
    name: 'permlevel',
    description: 'Informacja o poziomie uprawnien. PV:0',
    usage: 'p.premlevel'
  };