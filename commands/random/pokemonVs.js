const commando = require("discord.js-commando");

class PokemonVS extends commando.Command {
    constructor(client) {
        super(client, {
            name:"vs",
            memberName:"vs",
            group:"random",
            description:"Check the attack multiplier of an attack against specific types.",
            example:["!vs fire rock steel"],
            args:[
                {
                    key:"attackE",
                    prompt:"Choose an attacking element. The choices are: normal, fight, flying, poison, ground, rock, bug, ghost, steel, fire, water, grass, electric, psychic, ice, dragon, dark and fairy.",
                    type:"string"
                },
                {
                    key:"defendE1",
                    prompt:"Choose defending element. The choices are: normal, fight, flying, poison, ground, rock, bug, ghost, steel, fire, water, grass, electric, psychic, ice, dragon, dark and fairy.",
                    type:"string"
                },
                {
                    key:"defendE2",
                    prompt:"Choose defending element. The choices are: normal, fight, flying, poison, ground, rock, bug, ghost, steel, fire, water, grass, electric, psychic, ice, dragon, dark and fairy.",
                    type:"string",
                    default:"none"
                }
            ]
        });
    }
    async run(message, args) {
        var atkE = args["attackE"];
        var def1 = args["defendE1"];
        var def2 = args["defendE2"];
        message.channel.send("Attacking element: " + atkE);
        message.channel.send("Primary defending element: " + def1);
        message.channel.send("Secondary defending element: " + def2);

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

        message.channel.send("The final multiplier is: " + finalMultiplier);
        //===============================================================================================================================
    }
}

module.exports = PokemonVS