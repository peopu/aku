exports.run = async (client, message, args, level) => {
  await message.reply("**Zrestartowano bota ;3**");
  await Promise.all(client.commands.map(cmd =>
    client.unloadCommand(cmd)
  ));
  process.exit(0);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: "reboot",
  category: "System",
  description: "Restartuje bota. PV:4",
  usage: "reboot"
};