const Discord = require("discord.js");
const pop = require("popcat-wrapper");

module.exports = async (client, interaction, args) => {
  const song = interaction.options.getString("song");

  const r = await pop.itunes(song).catch((e) => {
    return client.errNormal(
      {
        error: "Song not found!",
        type: "editreply",
      },
      interaction
    );
  });

  client.embed(
    {
      title: `<a:_:1171872871665119232>・${r.name}`,
      thumbnail: r.thumbnail,
      url: r.url,
      fields: [
        {
          name: "<:_:1171916318610563102>┇Name",
          value: `${r.name}`,
          inline: true,
        },
        {
          name: "<a:_:1172381703642288138>┇Artist",
          value: `${r.artist}`,
          inline: true,
        },
        {
          name: "<:_:1172411568043065417>┇Album",
          value: `${r.album}`,
          inline: true,
        },
        {
          name: "🎼┇Length",
          value: `${r.length}`,
          inline: true,
        },
        {
          name: "<a:_:1172460731485147187>┇Genre",
          value: `${r.genre}`,
          inline: true,
        },
        {
          name: "<a:_:1170793429832323132>┇Price",
          value: `${r.price}`,
          inline: true,
        },
        {
          name: "<a:_:1171930054566084702>┇Release Date",
          value: `<t:${Math.round(new Date(r.release_date).getTime() / 1000)}>`,
          inline: true,
        },
      ],
      type: "editreply",
    },
    interaction
  );
};
