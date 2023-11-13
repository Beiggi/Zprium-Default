const Discord = require("discord.js");

module.exports = async (client, interaction, args) => {
  const members = await interaction.guild.members.fetch();

  client.embed(
    {
      title: `<:_:1171928575243473057>・Membercount`,
      desc: `View the total number of members in the Club`,
      fields: [
        {
          name: `<:_:1171928575243473057>┆Members`,
          value: `${members.filter((member) => !member.user.bot).size} members`,
          inline: true,
        },
        {
          name: `<a:_:1170097290531315752>┆Bots`,
          value: `${members.filter((member) => member.user.bot).size} bots`,
          inline: true,
        },
        {
          name: `<:_:1171507916868689921>┆Total`,
          value: `${interaction.guild.memberCount} members`,
          inline: true,
        },
      ],
      type: "editreply",
    },
    interaction
  );
};
