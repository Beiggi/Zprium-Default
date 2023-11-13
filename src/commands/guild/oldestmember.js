const Discord = require("discord.js");

module.exports = async (client, interaction, args) => {
  const members = await interaction.guild.members.fetch();
  const getMember = members
    .filter((m) => !m.user.bot)
    .sort((a, b) => a.user.createdAt - b.user.createdAt);

  const member = Array.from(getMember.values());

  client.embed(
    {
      title: `<:_:1171509945120866415>・Oldest member`,
      desc: `See who is the oldest member in **${interaction.guild.name}**`,
      fields: [
        {
          name: `<:_:1170778648870125721>┆User`,
          value: `${member[0]} (${member[0].user.username}#${member[0].user.discriminator})`,
          inline: true,
        },
        {
          name: `<a:_:1171930054566084702>┆Account creation`,
          value: `<t:${Math.round(member[0].user.createdTimestamp / 1000)}>`,
          inline: true,
        },
      ],
      type: "editreply",
    },
    interaction
  );
};
