exports.run = (client, message, args) => {
  let command;
  if (client.commands.has(args[0])) {
    command = args[0];
  } else if (client.aliases.has(args[0])) {
    command = client.aliases.get(args[0]);
  }
  if (!command) {
    return message.channel.sendMessage(`**Nie moge znalesc komendy:** ${args[0]}`);
  } else {
    message.channel.sendMessage(`**Reloading:** ${command}`)
      .then(m => {
        client.reload(command)
          .then(() => {
            m.edit(`**Successfully reloaded: ${command}  🎉**`);
          })
          .catch(e => {
            m.edit(`⛔️**ERROR:**⛔️ 💢 ${command}\n\`\`\`${e.stack}\`\`\``);
          });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['r'],
  permLevel: 4
};

exports.help = {
  name: 'reload',
  description: 'Aktualizuje komendy. PV:4',
  usage: 'reload <commandname>'
};
