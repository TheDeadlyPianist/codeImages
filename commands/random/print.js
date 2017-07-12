const commando = require("discord.js-commando");

class Print extends commando.Command {
    constructor(client) {
        super (client, {
            name : "print",
            memberName : "print",
            group : "random",
            description : "Why don't people read?"
        });
    }

    async run(message, args) {
        message.channel.send("Daniel loves printing stuff out for absolutely no reason. Such a gent.");
    }
}

module.exports = Print;