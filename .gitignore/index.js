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
        message.channel.sendMessage("TU ES MOCHE !");
        console.log("Commande effectué");
    }

    if (message.content === prefix + "support"){
        var embed = new Discord.RichEmbed()
            .setTitle("SUPPORT")
            .setDescription("Page de support")
            .addField("Problème", "Envoie **1a** à MhBurgerKing en message privée", true)
            .addField("Question", "Envoie **2b** en message privée", true)
            .addField("Autre", "Envoie **3c** à MhBurgerKing en message privée", true)
            .setColor("0xF4D03F")
            .addField("Apprend à coder un bot discord !", "Suivez les tuto de [PZH Codage](https://www.youtube.com/c/pzhcodage) sur sa chaîne youtube !", true)
            .setFooter("La réponse de MhBurgerKing n'est pas immédiate, faites preuve de patience. :) Bon moment parmis la PZH's Community")
        message.channel.sendEmbed(embed);
    

    }
    if (message.content === prefix + "troprigolo"){
        message.channel.sendMessage("JE T'AIME PAS !");
        console.log("Commande effectué");
    }
});
