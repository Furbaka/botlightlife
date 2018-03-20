const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("¤")

bot.on('ready', function() {
    bot.user.setGame("guild.memberCount");
    console.log("Connected");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === prefix + "aide"){
        var embed = new Discord.RichEmbed()
            .setTitle("AIDE")
            .setDescription("COMMANDES")
            .addField("RIGOLO", "¤rigolo /n ¤troprigolo", true)
            .addField("UTILES", "¤avatar (pour afficher votre avatar /n ¤aide (pour afficher toutes les commandes)", true)
            .setColor("0xF4D03F")
            .setFooter("BOT CRÉÉ PAR MISTIGRIX")
        message.channel.sendEmbed(embed);
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
        member.send("JE T'AIME PAS !");
        console.log("Commande effectué");
    }
});
