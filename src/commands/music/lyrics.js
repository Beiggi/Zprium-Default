const Discord = require("discord.js");
const lyricsFinder = require("lyrics-finder");

module.exports = async (client, interaction, args) => {
  let search = "";

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

  if (!player || !player.queue.current)
    return client.errNormal(
      {
        error: "There are no songs playing in the Club",
        type: "editreply",
      },
      interaction
    );

  if (!interaction.options.getString("song")) {
    search = player.queue.current.title;
  } else {
    search = interaction.options.getString("song");
  }

  let lyrics = "";

  try {
    lyrics = await lyricsFinder(search, "");
    if (!lyrics)
      lyrics = `No lyrics found for ${search} <a:_:1171979021668581468>`;
  } catch (error) {
    lyrics = `No lyrics found for ${search} <a:_:1171979021668581468>`;
  }

  client.embed(
    {
      title: `<a:_:1169204360803266570>・Lyrics For ${search}`,
      desc: lyrics,
      type: "editreply",
    },
    interaction
  );
};
