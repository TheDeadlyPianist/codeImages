const commando = require("discord.js-commando");
const gifs = require("./gifs.js");

class JackSavage extends commando.Command {
    constructor(client) {
        super(client, {
            name : "jacksavage",
            memberName : "jacksavage",
            group : "jackroast",
            description : "Sayeth whaaaaaaat?"
        })
    }
    async run(message, args) {
        let filesend = gifs.gifs;
        let randN = Math.floor(Math.random()*gifs.gifs.length)
        filesend = filesend[randN]
        message.channel.send(
            "",
            {
                files : [
                    filesend
                ]
            }
        )
    }
}

module.exports = JackSavage;