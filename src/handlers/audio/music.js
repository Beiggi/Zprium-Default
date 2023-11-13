const Discord = require("discord.js");
const Voice = require("@discordjs/voice");

module.exports = (client) => {
  client
    .on(Discord.Events.InteractionCreate, async (interaction) => {
      if (interaction.isButton()) {
        if (interaction.customId == "Zprium-musicpause") {
          interaction.deferUpdate();

          const player = client.player.players.get(interaction.guild.id);
          if (!player) return;

          player.pause(true);

          const embedData = interaction.message.embeds[0];

          let row = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
              .setEmoji(client.emotes.music.previous)
              .setCustomId("Zprium-musicprev")
              .setStyle(Discord.ButtonStyle.Secondary),

            new Discord.ButtonBuilder()
              .setEmoji(client.emotes.music.play)
              .setCustomId("Zprium-musicstart")
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

          client.embed(
            {
              title: embedData.title,
              url: embedData.url,
              desc: `Music is currently paused`,
              thumbnail: embedData.thumbnail.url,
              fields: embedData.fields,
              components: [row],
              color: client.config.colors.error,
              type: "edit",
            },
            interaction.message
          );
        }

        if (interaction.customId == "Zprium-musicstart") {
          interaction.deferUpdate();

          const player = client.player.players.get(interaction.guild.id);
          if (!player) return;

          player.pause(false);

          const embedData = interaction.message.embeds[0];

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

          client.embed(
            {
              title: embedData.title,
              url: embedData.url,
              desc: `Music is currently resumed`,
              thumbnail: embedData.thumbnail.url,
              fields: embedData.fields,
              components: [row],
              type: "edit",
            },
            interaction.message
          );
        }

        if (interaction.customId == "Zprium-musicstop") {
          interaction.deferUpdate();

          const player = client.player.players.get(interaction.guild.id);
          if (!player) return;

          player.destroy();

          client.embed(
            {
              desc: `Music is currently stopped`,
              color: client.config.colors.error,
              components: [],
              type: "edit",
            },
            interaction.message
          );
        }

        if (interaction.customId == "Zprium-musicnext") {
          interaction.deferUpdate();

          const player = client.player.players.get(interaction.guild.id);
          if (!player) return;

          player.stop();

          const track = player.queue.current;

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
                  value: `<t:${(
                    Date.now() / 1000 +
                    track.duration / 1000
                  ).toFixed(0)}:f>`,
                  inline: true,
                },
                {
                  name: `<a:_:1172381703642288138>┆Author`,
                  value: `${track.author}`,
                  inline: true,
                },
              ],
              components: [row],
              type: "edit",
            },
            interaction.message
          );
        }

        if (interaction.customId == "Zprium-musicprev") {
          interaction.deferUpdate();

          const player = client.player.players.get(interaction.guild.id);
          if (!player || !player.queue.previous) return;

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
                  value: `<t:${(
                    Date.now() / 1000 +
                    track.duration / 1000
                  ).toFixed(0)}:f>`,
                  inline: true,
                },
                {
                  name: `<a:_:1172381703642288138>┆Author`,
                  value: `${track.author}`,
                  inline: true,
                },
              ],
              components: [row],
              type: "edit",
            },
            interaction.message
          );

          player.play(player.queue.previous);
        }
      }
    })
    .setMaxListeners(0);
};
