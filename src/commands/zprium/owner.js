const Discord = require("discord.js");

module.exports = async (client, interaction, args) => {
  client.embed(
    {
      title: `<a:_:1169201314497040454>・Owner information`,
      desc: `____________________________`,
      thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
      fields: [
        {
          name: "<a:_:1171927572397961287>┆Owner name",
          value: `Beiggi`,
          inline: true,
        },
        {
          name: "<:_:1170107575346413599>┆Discord tag",
          value: `</B3IGGI>#1654`,
          inline: true,
        },
        {
          name: "<:_:1171983267969380382>┆Website",
          value: `[https://github.com/Beiggi](https://github.com/Beiggi)`,
          inline: true,
        },
      ],
      type: "editreply",
    },
    interaction
  );
};
