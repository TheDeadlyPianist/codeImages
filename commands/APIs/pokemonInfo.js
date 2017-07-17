const commando = require("discord.js-commando");
const req = require("request");

class pokemonInfo extends commando.Command {
    constructor(client) {
        super(client, {
            name : "pinfo",
            memberName : "pinfo",
            description : "Pull up information relating to a specific Pokémon.",
            group : "apis",
            examples : ["£pinfo Charmander"],
            args : [
                {
                    key : "pokemonGet",
                    prompt : "Insert a Pokémon name to search for.",
                    type : "string"
                }
            ]
        })
    }
    async run (message, args) {
        let pokGet = args["pokemonGet"];
        pokGet = pokGet.toLowerCase;
        let url = "http://pokeapi.co/api/v2/pokemon/" + pokGet;
        
        message.reply("be patient. This can take some time.\nThe database is huge.");
        
        req(url, function(error, response, body) {
            if(response.statusCode == 404) {
                message.reply("that isn't a Pokémon.");
            } else {
                body = JSON.parse(body);
                let name = body["name"].replace(body["name"].slice(0, 1), body["name"].slice(0, 1).toUpperCase());
                let mType = body["types"][0]["type"]["name"].replace(body["types"][0]["type"]["name"].slice(0, 1), body["types"][0]["type"]["name"].slice(0, 1).toUpperCase());
                let sType = "None";
                let pokEnt = body["id"];
                let pokH = body["height"]/10;
                let pokW = body["weight"]/10;
                if(body["types"].length > 1) {
                    mType = body["types"][1]["type"]["name"].replace(body["types"][1]["type"]["name"].slice(0, 1), body["types"][1]["type"]["name"].slice(0, 1).toUpperCase());
                    sType = body["types"][0]["type"]["name"].replace(body["types"][0]["type"]["name"].slice(0, 1), body["types"][0]["type"]["name"].slice(0, 1).toUpperCase());
                }

                message.channel.send("=============================================\nName: " + name + "\nMain Type: " + mType + "\nSecondary Type: " +sType
                + "\n============================================="
                + "\nHeight: " + pokH + "m" + " Weight: " + pokW + "kg", {
                    files : [
                        body["sprites"]["front_default"]
                    ]
                });

                console.log(body);
            }
        })
    }
}

module.exports = pokemonInfo;