const Discord = require("discord.js");

module.exports = async (client, interaction, args) => {
  const perms = await client.checkPerms(
    {
      flags: [Discord.PermissionsBitField.Flags.KickMembers],
      perms: [Discord.PermissionsBitField.Flags.KickMembers],
    },
    interaction
  );

  if (perms == false) return;

  const member = await interaction.guild.members.fetch(
    interaction.options.getUser("user").id
  );
  const reason = interaction.options.getString("reason") || "Not given";

  if (
    member.permissions.has(Discord.PermissionsBitField.Flags.KickMembers) ||
    member.permissions.has(Discord.PermissionsBitField.Flags.KickMembers)
  )
    return client.errNormal(
      {
        error: "You can't kick a moderator",
        type: "editreply",
      },
      interaction
    );

  client
    .embed(
      {
        title: `<a:_:1172278780451098655>・Kick`,
        desc: `You've been kicked in **${interaction.guild.name}**`,
        fields: [
          {
            name: "<:_:1170778648870125721>┆Kicked by",
            value: interaction.user.tag,
            inline: true,
          },
          {
            name: "<:_:1172276796604022794>┆Reason",
            value: reason,
            inline: true,
          },
        ],
      },
      member
    )
    .then(function () {
      member.kick(reason);
      client.succNormal(
        {
          text: "The specified user has been successfully kicked and successfully received a notification!",
          fields: [
            {
              name: "<:_:1170778648870125721>┆Kicked user",
              value: member.user.tag,
              inline: true,
            },
            {
              name: "<:_:1172276796604022794>┆Reason",
              value: reason,
              inline: true,
            },
          ],
          type: "editreply",
        },
        interaction
      );
    })
    .catch(function () {
      member.kick(reason);
      client.succNormal(
        {
          text: "The given user has been successfully kicked, but has not received a notification!",
          type: "editreply",
        },
        interaction
      );
    });
};
