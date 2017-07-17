const commando = require("discord.js-commando");

class Jack extends commando.Command {
    constructor(client) {
        super(client, {
            name : "jack",
            memberName : "jack",
            group : "jackroast",
            description : "Jack, the savage meister!"
        })
    }
    async run(message, args) {
        message.channel.send(
            "Macho Man, Jack Savage!",
            {
                files : [
                    "http://www.reactiongifs.com/wp-content/uploads/2011/05/machoman_gifs.gif"
                ]
            }
        )
    }
}

module.exports = Jack;