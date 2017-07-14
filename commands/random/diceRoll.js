const commando = require("discord.js-commando");

class DiceRollCommand extends commando.Command {
    constructor (client) {
        super (client, {
            name : "diceroll",
            group : "random",
            memberName : "diceroll",
            description : "Roll a die of a given number of sides.",
            examples : [ "roll 28" ]
        });
    }
    async run(message, args) {
        var roll = Math.floor(Math.random()*36) + 1;
        message.reply("You scored a " + roll + " on the die.");
        message.channel.send(args[0]);
    }
}

module.exports = DiceRollCommand;