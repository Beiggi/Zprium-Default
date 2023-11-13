const Discord = require("discord.js");
const pop = require("popcat-wrapper");

module.exports = async (client, interaction, args) => {
  await interaction.deferReply({ fetchReply: true });

  const name = interaction.options.getString("name");

  const s = await pop.steam(name).catch((e) => {
    return client.errNormal(
      {
        error: "Application not found!",
        type: "editreply",
      },
      interaction
    );
  });

  await client.embed(
    {
      title: `<:_:1172563734795919510>・${s.name}`,
      thumbnail: s.thumbnail,
      fields: [
        {
          name: `<:_:1171916318610563102>┇Name`,
          value: `${s.name}`,
          inline: true,
        },
        {
          name: `<a:_:1171022078552580187>┇Capital`,
          value: `${s.description}`,
          inline: false,
        },
        {
          name: "<a:_:1170100030170988564>┇Developers",
          value: `${s.developers.join(", ")}`,
          inline: true,
        },
        {
          name: "<:_:1172563734795919510>┇Publishers",
          value: `${s.publishers.join(", ")}`,
          inline: true,
        },
        {
          name: "<a:_:1170793429832323132>┇Price",
          value: `${s.price}`,
          inline: true,
        },
      ],
      type: "editreply",
    },
    interaction
  );
};
