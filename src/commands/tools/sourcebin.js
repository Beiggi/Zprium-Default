const Discord = require("discord.js");
const sourcebin = require("sourcebin");

module.exports = async (client, interaction, args) => {
  const language = interaction.options.getString("language");
  const code = interaction.options.getString("code");

  const bin = await sourcebin
    .create(
      [
        {
          content: `${code}`,
          language: `${language}`,
        },
      ],
      {
        title: "<a:_:1172646138118160394>・Random Code",
        description: "This is code was uploaded via Zprium",
      }
    )
    .then((value) => {
      client.succNormal(
        {
          text: `Your code has been posted!`,
          fields: [
            {
              name: `<:_:1170104007977619586>┇Link`,
              value: `[Click here to see your code](${value.url})`,
              inline: true,
            },
          ],
          type: "editreply",
        },
        interaction
      );
    });
};
