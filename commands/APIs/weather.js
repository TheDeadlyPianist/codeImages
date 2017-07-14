const commando = require("discord.js-commando");
const req = require("request");
const fs = require("fs");

class Weather extends commando.Command {
    constructor(client) {
        super(client, {
            name : "weather",
            memberName : "weather",
            description : "Shows you the weather of a given location.",
            examples : ["£weather uk lincoln"],
            group : "apis",
            args : [
                {
                    key : "country",
                    prompt : "You need to enter the abbreviation of your Country, or State if you live in the USA.",
                    type : "string"
                },
                {
                    key : "city",
                    prompt : "You need to enter the full name of your City.",
                    type : "string"
                }
            ]
        })
    }

    async run(message, args) {
        var countryL = args["country"];
        var cityL = args["city"];
        var url = "http://api.wunderground.com/api/85754ff3511af2d7/conditions/q/" + countryL + "/" + cityL + ".json";
        req(url, function(error, response, body) {
                body = JSON.parse(body);
            if(body["current_observation"] != undefined) {
                var uwLocation = body["current_observation"]["display_location"]["full"];
                var temp = body["current_observation"]["temp_c"];
                var cond = body["current_observation"]["weather"];
                message.reply(uwLocation + "\nWeather: " + cond +  "\nTemperature: " + temp + "C", {
                    file : body["current_observation"]["icon_url"]
                });
            }
        });
    }
}

module.exports = Weather;