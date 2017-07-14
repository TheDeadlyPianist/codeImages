const commander = require("discord.js-commando");

class Harden extends commander.Command {
    constructor(client) {
        super(client, {
            name:"harden",
            memberName:"harden",
            description:"Use harden",
            group:"random"
        });
    }

    async run(message, args) {
        message.channel.send(message.author + " is getting hard! Gross!", {
            file : "https://raw.githubusercontent.com/TheDeadlyPianist/codeImages/master/images/harden.jpg"
        })
    }
}

module.exports = Harden;