const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("être un robot");
    console.log("Connected");
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n *rigolo \n *troprigolo");
    }

    if (message.content === prefix + "rigolo"){
        message.channe("TU ES MOCHE !");
        console.log("Commande effectué");
    }

    if (message.content === prefix + "troprigolo"){
        message.reply("JE T'AIME PAS !");
        console.log("Commande effectué");
    }
});
