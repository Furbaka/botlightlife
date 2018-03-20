const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("[")

bot.on('ready', function() {
    bot.user.setGame("message.guild.memberCount");
    console.log("Connected");
});

bot.login(process.env.TOKEN);

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  member.send(`Merci d'avoir rejoint 👾 L↓GHT L↑FE 👾 https://discord.gg/dQ6X7gj`);
});

bot.on('message', message => {
    if (message.content === prefix + "aide"){
        var embed = new Discord.RichEmbed()
            .setTitle("AIDE")
            .setDescription("COMMANDES")
            .addField("RIGOLO", "[rigolo /n [troprigolo", true)
            .addField("UTILES", "[avatar (pour afficher votre avatar /n [aide (pour afficher toutes les commandes)")
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
