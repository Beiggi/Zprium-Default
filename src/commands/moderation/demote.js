const Discord = require("discord.js");

module.exports = async (client, interaction, args) => {
  const perms = await client.checkPerms(
    {
      flags: [Discord.PermissionsBitField.Flags.BanMembers],
      perms: [Discord.PermissionsBitField.Flags.BanMembers],
    },
    interaction
  );

  if (perms == false) return;

  const member = await interaction.guild.members.fetch(
    interaction.options.getUser("user").id
  );

  member.roles
    .remove(member.roles.highest.id)
    .then((r) => {
      client
        .embed(
          {
            title: `<a:_:1172278780451098655>・Demote`,
            desc: `You've been demoted from **${interaction.guild.name}**`,
            fields: [
              {
                name: "<:_:1170778648870125721>┆Moderator",
                value: interaction.user.tag,
                inline: true,
              },
            ],
          },
          member
        )
        .catch(() => {});

      client.succNormal(
        {
          text: `User successfully demoted`,
          fields: [
            {
              name: "<:_:1170778648870125721>┆User",
              value: `${member}`,
              inline: true,
            },
          ],
          type: "editreply",
        },
        interaction
      );
    })
    .catch((e) => {
      client.errNormal(
        {
          error: "I can't demote the user",
          type: "editreply",
        },
        interaction
      );
    });
};
