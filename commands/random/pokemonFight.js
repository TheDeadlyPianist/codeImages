const commando = require("discord.js-commando");
const req = require("request");
const jimp = require("jimp");

class PokemonFight extends commando.Command {
    constructor(client) {
        super(client, {
            name : "pf",
            memberName : "pf",
            description : "Make 2 Pokémon fight. Checks to see how well the first Pokémon's primary element will fair against the second Pokémon.",
            examples : ["£pf Arcanine Weedle"],
            group : "random",
            args : [
                {
                    key : "pok1",
                    prompt : "Enter the attacking Pokémon.",
                    type : "string"
                },
                {
                    key : "pok2",
                    prompt : "Enter the defending Pokémon's name.",
                    type : "string"
                }
            ]
        })
    }
    async run(message, args) {
        message.reply("This is going to take a while. Sit back.")
        let pok1 = args["pok1"];
        let pok1N = "";
        let pok1E1 = "";
        let pok1E2 = "";
        let pok1I = "";
        let pok2 = args["pok2"];
        let pok2N = "";
        let pok2E1 = "";
        let pok2E2 = "";
        let pok2I = "";

        let pok1C = false;
        let pok2C = false;

        function createImage(imgurl1, imgurl2) {
            jimp.read("images/dynamic/dynamicgrassdefault.png", function(err, image) {
                jimp.read(imgurl1).then(function (img2) {
                    jimp.read(imgurl2).then(function (img3) {
                        message.channel.send("Initialising Battle")
                        image.composite(img2.resize(300, 300), -20, 25).composite(img3.resize(150, 150), 245, -5).write("images/dynamic/returnimage.png").getBuffer(jimp.AUTO, (err, output) => {
                            if (err) {return console.log("Error: " + err);}
                            //message.channel.send("", {files:["images/dynamic/returnimage.png"]});
                            doFight();
                        })
                    });
                });
            }).catch(function (err) {
                console.log(err);
            })
        }
        function doFight() {
            var atkE = pok1E1;
            var def1 = pok2E1;
            var def2 = pok2E2;

            var supEff = "images/superEffective.PNG";
            var inEff = "images/ineffective.PNG";
            var noEff = "images/noeffect.PNG";

            var normal = [1, 1, 1, 1, 1, 1, 0.5, 1, 0, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            var fight = [1, 2, 1, 0.5, 0.5, 1, 2, 0.5, 0, 2, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5];
            var flying = [1, 1, 2, 1, 1, 1, 0.5, 2, 1, 0.5, 1, 1, 2, 0.5, 1, 1, 1, 1, 1];
            var poison = [1, 1, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 0, 1, 1, 2, 1, 1, 1, 1, 1, 2];
            var ground = [1, 1, 1, 0, 2, 1, 2, 0.5, 1, 2, 2, 1, 0.5, 2, 1, 1, 1, 1, 1];
            var rock = [1, 1, 0.5, 2, 1, 0.5, 1, 2, 0.5, 1, 2, 2, 1, 0.5, 2, 1, 1, 1, 1, 1];
            var bug = [1, 1, 0.5, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 0.5, 1, 2, 1, 2, 1, 1, 2, 0.5];
            var ghost = [1, 0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 1];
            var steel = [1, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 1, 2, 1, 1, 2];
            var fire = [1, 1, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5, 0.5, 2, 1, 1, 2, 0.5, 1, 1];
            var water = [1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 0.5, 0.5, 2, 1, 1, 2, 0.5, 1, 1];
            var grass = [1, 1, 1, 0.5, 0.5, 2, 2, 0.5, 1, 0.5, 0.5, 2, 0.5, 1, 1, 1, 0.5, 1, 1];
            var electric = [1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 0.5, 1, 1];
            var psychic = [1, 1, 2, 1, 2, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 1, 0, 1];
            var ice = [1, 1, 1, 2, 1, 2, 1, 1, 1, 0.5, 0.5, 0.5, 2, 1, 1, 0.5, 2, 1, 1];
            var dragon = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 2, 1, 0];
            var dark = [1, 1, 0.5, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5];
            var fairy = [1, 1, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1, 1, 2, 2, 1];

            var elementsLookUp = {
                "normal":function() {
                    return normal;
                },
                "fight":function() {
                    return fight;
                },
                "flying":function() {
                    return flying;
                },
                "poison":function() {
                    return poison;
                },
                "ground":function() {
                    return ground;
                },
                "rock":function() {
                    return rock;
                },
                "bug":function() {
                    return bug;
                },
                "ghost":function() {
                    return ghost;
                },
                "steel":function() {
                    return steel;
                },
                "fire":function() {
                    return fire;
                },
                "water":function() {
                    return water;
                },
                "grass":function() {
                    return grass;
                },
                "electric":function() {
                    return electric;
                },
                "psychic":function() {
                    return psychic;
                },
                "ice":function() {
                    return ice;
                },
                "dragon":function() {
                    return dragon;
                },
                "dark":function() {
                    return dark;
                },
                "fairy":function() {
                    return fairy;
                },
            }
            var indexFind = {
                "none":function() {
                    return 0;
                },
                "normal":function() {
                    return 1;
                },
                "fight":function() {
                    return 2;
                },
                "flying":function() {
                    return 3;
                },
                "poison":function() {
                    return 4;
                },
                "ground":function() {
                    return 5;
                },
                "rock":function() {
                    return 6;
                },
                "bug":function() {
                    return 7;
                },
                "ghost":function() {
                    return 8;
                },
                "steel":function() {
                    return 9;
                },
                "fire":function() {
                    return 10;
                },
                "water":function() {
                    return 11;
                },
                "grass":function() {
                    return 12;
                },
                "electric":function() {
                    return 13;
                },
                "psychic":function() {
                    return 14;
                },
                "ice":function() {
                    return 15;
                },
                "dragon":function() {
                    return 16;
                },
                "dark":function() {
                    return 17;
                },
                "fairy":function() {
                    return 18;
                },
            }
            var usedArray = elementsLookUp[atkE]();
            var firstIndex = indexFind[def1]();
            var secondIndex = indexFind[def2]();
            var finalMultiplier = usedArray[firstIndex]*usedArray[secondIndex];
            var filesend = "";
            if(finalMultiplier > 1) {
                filesend = supEff;
            } else if(finalMultiplier == 0.5) {
                filesend = inEff;
            } else if(finalMultiplier == 0) {
                filesend = noEff;
            }
            message.channel.send("", {files:["images/dynamic/returnimage.png"]})
            if(filesend != "") {
                message.channel.send(pok1N + " vs " + pok2N
                + "\nMultiplier: " + finalMultiplier, {
                    files : [
                        filesend
                    ]
                })
            } else {
                message.channel.send(pok1N + " vs " + pok2N
                + "\nMultiplier: " + finalMultiplier)
            }
        }

        function setInfo (input, check) {
            message.channel.send("Starting search for input: " + input)
            let getURL = "http://pokeapi.co/api/v2/pokemon/" + input;

            req(getURL, function(error, response, body) {
                if(response.statusCode == 404) {
                    message.reply(input + " is not a correct spelling.");
                } else {
                    body = JSON.parse(body);
                    let pName = body["name"].replace(body["name"].slice(0, 1), body["name"].slice(0, 1).toUpperCase());
                    let mainE = body["types"][0]["type"]["name"];
                    let secondaryE = "none";
                    if(body["types"].length > 1) {
                        mainE = body["types"][1]["type"]["name"];
                        secondaryE = body["types"][0]["type"]["name"];
                    }
                    if(check == 1) {
                        pok1N = pName;
                        pok1E1 = mainE;
                        pok1E2 = secondaryE;
                        pok1I = body["sprites"]["back_default"];
                        pok1C = true;
                    } else {
                        pok2N = pName;
                        pok2E1 = mainE;
                        pok2E2 = secondaryE;
                        pok2I = body["sprites"]["front_default"];
                        pok2C = true;
                    }
                    message.channel.send("Pokémon found: " + pName);
                }
                if(pok1C && !pok2C) {
                    setInfo(pok2, 2);
                } else if(pok1C && pok2C) {
                    createImage(pok1I, pok2I);
                }
            })
        }

        setInfo(pok1, 1);
        
    }
}

module.exports = PokemonFight;