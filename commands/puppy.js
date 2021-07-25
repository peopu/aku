const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {

    let reddit = [
        "puppy",
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    message.channel.startTyping();

    randomPuppy(subreddit).then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'puppy.png'
                }]
            }).then(() => message.channel.stopTyping());
    }).catch(err => console.error(err));

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['puppy'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'puppy',
    description: 'Wysyła pieska ;3. PV:0',
    usage: 'puppy'
  };