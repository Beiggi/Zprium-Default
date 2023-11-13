const Discord = require("discord.js");

module.exports = async (client, interaction, args) => {
  client.embed(
    {
      title: "<a:_:1171924485520248864>・Changelogs",
      desc: `_____`,
      thumbnail: client.user.avatarURL({ size: 1024 }),
      fields: [
        {
          name: "<a:_:1171924485520248864>┆Changelogs",
          value: "30/10/2023 Updated dependencies",
          inline: false,
        },
      ],
      type: "editreply",
    },
    interaction
  );
};
