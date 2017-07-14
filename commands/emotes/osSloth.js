const commando = require("discord.js-commando");

class osSloth extends commando.Command {
    constructor (client) {
        super (client, {
            name : "ossloth",
            memberName : "ossloth",
            group : "emotes",
            description : "Displays the osSloth emote from Twitch."
        })
    }
    async run (message, args) {
        message.channel.send("", {
            files : ["https://static-cdn.jtvnw.net/jtv_user_pictures/ossloth-profile_image-de0e8b0b759c5f5b-300x300.png"]
        })
        message.delete();
    }
}

module.exports = osSloth;