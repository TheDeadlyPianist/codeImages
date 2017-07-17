const commando = require("discord.js-commando");
const sassyBot = new commando.Client();
sassyBot.registry.registerGroup("random", "Random");
sassyBot.registry.registerGroup("apis", "APIs");
sassyBot.registry.registerGroup("emotes", "Twitch Emotes");
sassyBot.registry.registerGroup("jackroast", "Jack Roast");
sassyBot.registry.registerDefaults();
sassyBot.registry.registerCommandsIn(__dirname + "/commands");

sassyBot.on('message', (message) => {
    if(message.author.username == "Domryuken") {
        message.channel.send("Ladon, have you checked your privileges lately?")
    }
    if(message.content.includes("privilege") && message.author.username != "sassyBot") {
        message.channel.send("Ask Ladon if you're privileged enough for this.")
    }
});

sassyBot.login("MzM0NjE2NjgxMjk5MzEyNjYx.DEeAoA.ouDZyLF8ggcaTM_SSjoDsK8xq0w");