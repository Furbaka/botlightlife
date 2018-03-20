const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("MANGER");
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

    if (message.content === prefix + "avatar") {
     // Send the user's avatar URL
        message.reply(message.author.avatarURL);
    }
        
    if (message.content === prefix + "troprigolo"){
        message.channel.sendMessage("JE T'AIME PAS !");
        console.log("Commande effectué");
    }
    
    if (message.content === "do you know da wae"){
        message.channel.sendMessage("Follow me ma brudda, I know da wae !");
    }
    
    if (message.content === "pizza"){
        message.channel.sendMessage("arrêtez de parler de bouffe j'ai faim :/");
    }
    
    if (message.content === "burger"){
        message.channel.sendMessage("arrêtez de parler de bouffe j'ai faim :/");
    }
    
    if (message.content === "pâtes"){
        message.channel.sendMessage("arrêtez de parler de bouffe j'ai faim :/");
    }
    
    if (message.content === "dab"){
        message.channel.sendMessage("LE DAB NÉ PAS MORT");
    }

});

bot.on("message", function(message) { var input = message.content.toUpperCase();

phrase_responses = {
    'ME TOO THANKS': 'me too thanks.',
    'SOCK': 'SOCK DETECTED! <@!89785033451134976> has been notified!',
    'HAT': 'fuck me daddy!',
    'KRYSO': 'What about that faggot?',
    'SUCC': 'of',
    'OF': 'dick',
    'WHAT\'RE YOU, FUCKING GAY?': 'I have crippling depression',
    '!POEM': '"Once upon a midnight peeping,\nWhile my parents slumbered, sleeping,\nThere I palmed a passion, keeping\nSoft and silent too -\n\nThere I sat and captivated,\nDearly watched, and willful, waited,\nShallow-breathed with brisk and bated\nBreaths I swiftly drew -\n\nThere I stared as steamy motions\nPlanted nice and naughty notions;\nSudden swelling deep devotions,\nSown and grown anew -\n\nThere was she - a maidens measure,\nStruck with thrusts and turns of pleasure;\nSordid, saucy teenage treasure,\nLeft for me to view -\n\nThere was I, with pleasure peaking -\nThere was she, in rapture, shrieking -\nThere was... he, up-close and speaking.\n\nStill - I saw it through.',
    'BAN HAGGLEBEARD': '*Banned*',
    'BAN RAPPY': 'But I love him!'
}

Object.keys(phrase_responses).forEach(function(phrase) {
    if (my_input.contains(phrase) {
        response = phrase_responses[phrase];
        bot.sendMessage(message, response);
    }
});
