const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("message.guild.memberCount");
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
    
    client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === prefix + "avatar") {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
        
    if (message.content === prefix + "troprigolo"){
        message.channel.sendMessage("JE T'AIME PAS !");
        console.log("Commande effectué");
    }
});
