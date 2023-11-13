const Discord = require("discord.js");
const pop = require("popcat-wrapper");

module.exports = async (client, interaction, args) => {
  const name = interaction.options.getString("name");

  const r = await pop.npm(name).catch((e) => {
    return client.errNormal(
      {
        error: "Package not found!",
        type: "editreply",
      },
      interaction
    );
  });

  client.embed(
    {
      title: `<:_:1172462048018432122>・${r.name}`,
      fields: [
        {
          name: "<:_:1171916318610563102>┇Name",
          value: `${r.name}`,
          inline: true,
        },
        {
          name: "<:_:1172462048018432122>┇Version",
          value: `${r.version}`,
          inline: true,
        },
        {
          name: "<:_:1172276796604022794>┇Description",
          value: `${r.description}`,
          inline: true,
        },
        {
          name: "<a:_:1172486213509316698>┇Keywords",
          value: `${r.keywords}`,
          inline: true,
        },
        {
          name: "<:_:1170778648870125721>┇Author",
          value: `${r.author}`,
          inline: true,
        },
        {
          name: "<:_:1172521523374981173>┇Downloads",
          value: `${r.downloads_this_year}`,
          inline: true,
        },
        {
          name: "<a:_:1171930054566084702>┇Last publish",
          value: `<t:${Math.round(
            new Date(r.last_published).getTime() / 1000
          )}>`,
          inline: true,
        },
      ],
      type: "editreply",
    },
    interaction
  );
};
