const Discord = require("discord.js");

module.exports = async (client, interaction, args) => {
  const player = client.player.players.get(interaction.guild.id);

  const channel = interaction.member.voice.channel;
  if (!channel)
    return client.errNormal(
      {
        error: `You're not in a voice channel!`,
        type: "editreply",
      },
      interaction
    );

  if (player && channel.id !== player?.voiceChannel)
    return client.errNormal(
      {
        error: `You're not in the same voice channel!`,
        type: "editreply",
      },
      interaction
    );

  if (!player || !player.queue.previous)
    return client.errNormal(
      {
        error: "There are no songs was played previously",
        type: "editreply",
      },
      interaction
    );

  const track = player.queue.previous;

  let row = new Discord.ActionRowBuilder().addComponents(
    new Discord.ButtonBuilder()
      .setEmoji("⏮️")
      .setCustomId("Zprium-musicprev")
      .setStyle(Discord.ButtonStyle.Primary),

    new Discord.ButtonBuilder()
      .setEmoji("⏸️")
      .setCustomId("Zprium-musicpause")
      .setStyle(Discord.ButtonStyle.Primary),

    new Discord.ButtonBuilder()
      .setEmoji("⏹️")
      .setCustomId("Zprium-musicstop")
      .setStyle(Discord.ButtonStyle.Primary),

    new Discord.ButtonBuilder()
      .setEmoji("⏭️")
      .setCustomId("Zprium-musicnext")
      .setStyle(Discord.ButtonStyle.Primary)
  );

  client.embed(
    {
      title: `<a:_:1171872871665119232>・${track.title}`,
      url: track.uri,
      desc: `Music started in <#${player.voiceChannel}>!`,
      thumbnail: track.thumbnail,
      fields: [
        {
          name: `<:_:1170778648870125721>┆Requested By`,
          value: `${track.requester}`,
          inline: true,
        },
        {
          name: `<a:_:1170110120844341328>┆Ends at`,
          value: `<t:${(Date.now() / 1000 + track.duration / 1000).toFixed(
            0
          )}:f>`,
          inline: true,
        },
        {
          name: `<a:_:1172381703642288138>┆Author`,
          value: `${track.author}`,
          inline: true,
        },
      ],
      components: [row],
      type: "editreply",
    },
    interaction
  );

  player.play(player.queue.previous);
};
