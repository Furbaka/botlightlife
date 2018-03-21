const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("MANGER | *aide");
    console.log("Connected");
});

bot.login(process.env.TOKEN);

       
bot.on('message', message => {
    if (message.content === prefix + "aide"){
        var embed2 = new Discord.RichEmbed()
            .setTitle("AIDE")
            .setDescription("COMMANDES")
            .addField("FUN", "*rigolo | *troprigolo")
            .addField("UTILES", "*info (pour voir les informations du serveurs) | *avatar (pour avoir votre PP) | *aide (bah... pour l'aide quoi.)")
            .setColor("0xF4D03F")
            .setFooter("BOT CRÉÉ PAR MISTIGRIX, qui a caché des easter eggs...")
        message.channel.sendEmbed(embed2);
    }

    if (message.content === prefix + "rigolo"){
        message.channel.sendMessage("TU ES MOCHE !");
        console.log("Commande effectué");
    }

    if (message.content === prefix + "info"){
        var embed = new Discord.RichEmbed()
            .setTitle("INFO")
            .setDescription("Information du serveur")
            .addField("Nom", message.guild.name)
            .addField("Membres", message.guild.memberCount)
            .setColor("0xF4D03F")
            .setFooter("BOT CRÉÉ PAR MISTIGRIX")
        message.channel.sendEmbed(embed);
    

    }

    if (message.content === prefix + "avatar") {
     // Send the user's avatar URL
        message.reply(message.author.avatarURL);
    }
        
    if (message.content === prefix + "troprigolo"){
        message.channel.sendMessage("JE T'AIME PAS !");
        console.log("Commande effectué");
    }
    
    if (message.content.startWith === "DO YOU KNOW DA WAE"){
        message.channel.sendMessage("Follow me ma brudda, I know da wae !");
    }

    if (message.content.endWith === "PÂTES" || message.content.endWith === "BURGER" || message.content.endWith === "PIZZA"){
        message.channel.sendMessage("Arrêtez de parler de bouffe j'ai faim :/");
    }
    
    if (message.content === "DAB"){
        message.channel.sendMessage("LE DAB NÉ PAS MORT");
    }

    if (message.content.startWith === "BOT" || message.content.endWith === "BOT"){
        message.channel.sendMessage("Donc... je suis pas un vrai petit garcon ? :/");
    }
    
if (message.content.startWith === "QUELLE HEURE IL EST") {
        message.channel.sendMessage("L'HEURE DE T'ACHETER UNE MONTRE !");
    }
});
