const Discord = require("discord.js");

module.exports = async (client, interaction, args) => {
  client.embed(
    {
      title: `<:_:1172395170726162472>・Radio information`,
      desc: `All info about the radio in the Club`,
      fields: [
        {
          name: "<:_:1171507916868689921>┆Channel Listeners",
          value: `${interaction.member.voice.channel.members.size} listeners`,
          inline: true,
        },
        {
          name: "<a:_:1171909730512412794>┆Connected channel",
          value: `${interaction.member.voice.channel} (${interaction.member.voice.channel.name})`,
          inline: true,
        },
        {
          name: "<a:_:1169204360803266570>┆Radio Station",
          value: `[Radio Lofi](https://live.hunter.fm/lofi_high)`,
          inline: true,
        },
      ],
      type: "editreply",
    },
    interaction
  );
};
