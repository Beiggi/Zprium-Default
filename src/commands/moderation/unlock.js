const Discord = require("discord.js");

module.exports = async (client, interaction, args) => {
  const perms = await client.checkPerms(
    {
      flags: [Discord.PermissionsBitField.Flags.ManageChannels],
      perms: [Discord.PermissionsBitField.Flags.ManageChannels],
    },
    interaction
  );

  if (perms == false) return;

  const channel =
    interaction.options.getChannel("channel") || interaction.channel;

  await channel.permissionOverwrites.edit(
    interaction.guild.roles.cache.find((x) => x.name === "@everyone"),
    {
      SendMessages: true,
    }
  );

  client.succNormal(
    {
      text: "Channel unlocked successfully!",
      fields: [
        {
          name: `<a:_:1171909730512412794>┆Channel`,
          value: `${channel} (${channel.name})`,
        },
      ],
      type: "editreply",
    },
    interaction
  );
};
