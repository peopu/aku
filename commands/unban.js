exports.run = (client, message, args) => {
  const reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  const user = args[0];
  const modlog = client.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('Nie moge znalesc kanalu mod-log');
  if (reason.length < 1) return message.reply('Musisz dac powod');
  if (!user) return message.reply('Nie podales ID uzytkownika,').catch(console.error);
  message.guild.unban(user);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'Unbanuje zbanowanego uzytkownika. PV:2',
  usage: 'unban [IDosoby] [powod]'
};
