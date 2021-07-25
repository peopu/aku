module.exports = (guild, user) => {
  guild.defaultChannel.sendMessage(`${user.username} **zostal zbanowany!**`);
};
