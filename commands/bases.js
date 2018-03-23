const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("MANGER | *aide");
    console.log("Connected");
});

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
    
    if (message.content == "DO YOU KNOW DA WAE ?" || message.content == "do you know da wae ?" || message.content == "DO YOU KNOW DA WAE" || message.content == "do you know da wae" ){
        message.channel.sendMessage("Follow me ma brudda, I know da wae ! /n https://www.google.com/maps/place/Uganda/@1.3671051,30.058145,7z/data=!3m1!4b1!4m5!3m4!1s0x1771a69f6499f945:0x874155ce43014549!8m2!3d1.373333!4d32.290275");
    }

    if (message.content == "pates" || message.content == "burger" || message.content == "pizza" ||  message.content == "pâtes"){
        message.reply("Arrête de parler de bouffe j'ai faim :/");
    }
    
    if (message.content == "DAB" || message.content == "dab"){
        message.channel.sendMessage("LE DAB NÉ PAS MORT");
    }

    if (message.content == "BOT" || message.content == "bot"){
        message.channel.sendMessage("Donc... je suis pas un vrai petit garcon ? :/");
    }
    
    if (message.content == "Quelle heure il est ?" || message.content == "quelle heure il est ?" || message.content == "Quelle heure il est " ||message.content == "quelle heure il est ?" || message.content == "QUELLE HEURE IL EST ?" || message.content.startsWith == "il est quelle heure") {
        message.channel.sendMessage("L'HEURE DE T'ACHETER UNE MONTRE !");
    }
    if (message.content == "WAW" || message.content == "wow" || message.content == "woaw" || message.content == "WOW" || message.content == "waw"){
        message.reply("T'as vu, c'est dingue !");
    }
});
