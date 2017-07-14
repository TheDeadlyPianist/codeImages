const commando = require("discord.js-commando");

class NotLikeThis extends commando.Command {
    constructor (client) {
        super (client, {
            name : "notlikethis",
            memberName : "notlikethis",
            group : "emotes",
            description : "Displays the NotLikeThis emote from Twitch."
        })
    }
    async run (message, args) {
        message.channel.send("", {
            files : ["https://pbs.twimg.com/media/CKo7mXLUMAALiJG.png"]
        });
        message.delete();
    }
}

module.exports = NotLikeThis;