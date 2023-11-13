const Discord = require("discord.js");

module.exports = async (client, interaction, args) => {
  const text = interaction.options.getString("text");

  let encode = text
    .split("")
    .map((x) => x.charCodeAt(0).toString(2))
    .join(" ");

  client.embed(
    {
      title: `<a:_:1171840666062557225>・Success!`,
      desc: `I converted text to binary text`,
      fields: [
        {
          name: "📥┇Input",
          value: `\`\`\`${text}\`\`\``,
          inline: false,
        },
        {
          name: "📤┇Output",
          value: `\`\`\`${encode}\`\`\``,
          inline: false,
        },
      ],
      type: "editreply",
    },
    interaction
  );
};
