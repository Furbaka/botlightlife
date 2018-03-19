const Discord = require("discord.js");
var bot = new Discord.Client();
bot.login(process.env.TOKEN);
var prefix = (":::");

bot.on("message", message => {

	if(message.content === prefix + "info") {
		var embed = new Discord.RichEmbed()
		.setDescription("Informations du serveur")
		.addField("Nom du serveur", message.guild.name)
		.addfield("Créé le", message.guild.createdAt)
		.addField("Utilisateurs sur le serveurs", message.guild.membercount)
		.setColor("0x0000FF")
	message.channel.sendEmbed(embed)

	}

	if (message.content.startWith(prefix + "sondage")) {
		if(message.author.id == "328514801124900866"){
			let args = message.content.split(" ").slice(1);
			let thingToEcho = args.join(" ")
			var embed = new Discord.RichEmbed()
				.setDescription("Sondage")
				.addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
				.setColor("0xB40404")
				.setTimestamp()
			message.guild.channels.find("name", "sondage").sendEmbed(embed)
			.then(function (message) {
			message.react("✔")
			message.react("❌")
		}).catch(function() {
		});
		}else{
			return message.reply("Tu n'as pas la permission.")
}}})
