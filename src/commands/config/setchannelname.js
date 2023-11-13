const Discord = require("discord.js");

const Schema = require("../../database/models/stats");

module.exports = async (client, interaction, args) => {
  const perms = await client.checkUserPerms(
    {
      flags: [Discord.PermissionsBitField.Flags.ManageChannels],
      perms: [Discord.PermissionsBitField.Flags.ManageChannels],
    },
    interaction
  );

  if (perms == false) return;

  const name = interaction.options.getString("name");

  if (name.toUpperCase() == "HELP") {
    return client.embed(
      {
        title: `<a:_:1169201314497040454>・Channel name options`,
        desc: `These are the channel name options: \n
            \`{emoji}\` - Channel emoji
            \`{name}\` - Channel name`,
        type: "editreply",
      },
      interaction
    );
  }

  Schema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
    if (data) {
      data.ChannelTemplate = name;
      data.save();
    } else {
      new Schema({
        Guild: interaction.guild.id,
        ChannelTemplate: name,
      }).save();
    }

    client.succNormal(
      {
        text: `The channel name has been set successfully`,
        fields: [
          {
            name: `<:_:1171916318610563102>┆Name`,
            value: `${name}`,
            inline: true,
          },
        ],
        type: "editreply",
      },
      interaction
    );
  });
};
