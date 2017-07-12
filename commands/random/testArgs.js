const commando = require("discord.js-commando");

class testArg extends commando.Command {
    constructor(client) {
        super(client, {
            name : "testa",
            group:"random",
            memberName : "testa",
            description : "Test multiple aguments input.",
            args : [
                {
                    key: "arga",
                    prompt: "This is the first argument",
                    type: "string"
                },
                {
                    key: "argb",
                    prompt: "This is the second argument",
                    type: "string"
                }
            ]
        });
    }

    async run(message, args) {
        var argA = args["arga"];
        var argB = args["argb"];
        message.channel.send(argA + " and then " + argB);
    }
}

module.exports = testArg;