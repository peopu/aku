const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {

    let reddit = [
        "cats",
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    message.channel.startTyping();

    randomPuppy(subreddit).then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'cat.png'
                }]
            }).then(() => message.channel.stopTyping());
    }).catch(err => console.error(err));

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['cat'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'cat',
    description: 'Wysyła kotka ;3. PV:0',
    usage: 'cat'
  };