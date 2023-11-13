const Discord = require("discord.js");

module.exports = async (client, interaction, args) => {
  const question = interaction.options.getString("question");

  var antwoorden = [
    "Yes!",
    "Unfortunately not",
    "You are absolutely right!",
    "No, sorry.",
    "I agree",
    "No idea!",
    "I am not that smart ..",
    "My sources say no!",
    "It is certain",
    "You can rely on it",
    "Probably not",
    "Everything points to a no",
    "No doubt",
    "Absolutely",
    "I do not know",
  ];
  var resultaat = Math.floor(Math.random() * antwoorden.length);

  client.embed(
    {
      title: `<a:_:1172203152959881357>・8ball`,
      desc: `See the answer on your question!`,
      fields: [
        {
          name: `<a:_:1170105530728075314>┆Your Question`,
          value: `\`\`\`${question}\`\`\``,
          inline: false,
        },
        {
          name: `<:_:1171218157042679838>┆Zprium Answer`,
          value: `\`\`\`${antwoorden[resultaat]}\`\`\``,
          inline: false,
        },
      ],
      type: "editreply",
    },
    interaction
  );
};
