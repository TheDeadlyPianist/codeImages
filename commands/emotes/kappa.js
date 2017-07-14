const commando = require("discord.js-commando");

class Kappa extends commando.Command {
    constructor (client) {
        super (client, {
            name : "kappa",
            memberName : "kappa",
            group : "emotes",
            description : "Displays the Kappa emote from Twitch."
        })
    }
    async run (message, args) {
        message.channel.send("", {
            files : ["https://pbs.twimg.com/media/CKeCkgGWsAAx3pe.png"]
        })
        message.delete();
    }
}

module.exports = Kappa;