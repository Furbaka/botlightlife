/*
  Creates reaction-based polls
 */

const createTimedMessage = require('./../modules/timedMessage');

module.exports = bot => bot.registerCommand('poll', (msg, args) => {
  msg.delete();

  const title = args.join(' ');
  if (title) {
    msg.channel.createMessage({
      embed: {
        title: 'Sondage',
        description: title,
        footer: {
          text: 'Utilise les réactions 👍 ou 👎',
        },
      },
    }).then((message) => {
      message.addReaction('👍');
      message.addReaction('👎');
    });
  } else {
    createTimedMessage(bot, msg.channel.id, {
      embed: {
        title: 'Créer un titre',
        description: 'Ajoute une description',
        color: bot.selfConfig.errorColor,
      },
    });
  }
}, {
  description: 'Créer un sondage',
  fullDescription: 'Makes a poll with thumbs-up/down reactions',
  usage: '<title>',
});
