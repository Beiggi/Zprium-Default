const Discord = require("discord.js");

module.exports = (client, player, track) => {
  let row = new Discord.ActionRowBuilder().addComponents(
    new Discord.ButtonBuilder()
      .setEmoji(client.emotes.music.previous)
      .setCustomId("Zprium-musicprev")
      .setStyle(Discord.ButtonStyle.Secondary),

    new Discord.ButtonBuilder()
      .setEmoji(client.emotes.music.pause)
      .setCustomId("Zprium-musicpause")
      .setStyle(Discord.ButtonStyle.Secondary),

    new Discord.ButtonBuilder()
      .setEmoji(client.emotes.music.stop)
      .setCustomId("Zprium-musicstop")
      .setStyle(Discord.ButtonStyle.Secondary),

    new Discord.ButtonBuilder()
      .setEmoji(client.emotes.music.next)
      .setCustomId("Zprium-musicnext")
      .setStyle(Discord.ButtonStyle.Secondary)
  );

  const channel = client.channels.cache.get(player.textChannel);

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
    },
    channel
  );
};
