const Discord = require("discord.js");
const pop = require("popcat-wrapper");

module.exports = async (client, interaction, args) => {
  let name = interaction.options.getString("name");

  const r = await pop.github(name).catch(() => {
    return client.errNormal(
      {
        error: `No account found with the username: ${name}`,
        type: "editreply",
      },
      interaction
    );
  });

  client.embed(
    {
      title: `<:_:1170107575346413599>・${r.name}`,
      thumbnail: r.avatar,
      url: r.url,
      fields: [
        {
          name: "<:_:1170107575346413599>┇Name",
          value: `${r.name}`,
          inline: true,
        },
        {
          name: "<:_:1172408138071298061>┇Company",
          value: `${r.company}`,
          inline: true,
        },
        {
          name: "<:_:1172276796604022794>┇Bio",
          value: `${r.bio}`,
          inline: true,
        },
        {
          name: "<:_:1172409046653992970>┇Public Repositories",
          value: `${r.public_repos}`,
          inline: true,
        },
        {
          name: "<a:_:1171930054566084702>┇Created At",
          value: `<t:${Math.round(new Date(r.created_at).getTime() / 1000)}>`,
          inline: true,
        },
      ],
      type: "editreply",
    },
    interaction
  );
};
