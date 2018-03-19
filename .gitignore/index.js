const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: !help");
    console.log("Connected");
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n !burgerbot \n !fabriquant");
    }

    if (message.content === prefix + "burgerbot"){
        message.channe("Création du bot le _11/12/2017_ à _13h57_");
        console.log("Commande effectué");
    }

    if (message.content === prefix + "fabriquant"){
        message.reply("_Ce bot a été crée par MhBurgerKing_");
        console.log("Commande effectué");
    }
});
