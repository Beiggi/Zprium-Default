const Discord = require("discord.js");
const Schema = require("../../database/models/music");

module.exports = async (client, interaction, args) => {
  const webhookClientLogs = new Discord.WebhookClient({
    id: client.webhooks.voiceLogs.id,
    token: client.webhooks.voiceLogs.token,
  });

  let channel = interaction.member.voice
    ? interaction.member.voice.channel
    : null;
  if (!channel)
    return client.errNormal(
      { text: `The channel does not exist!`, type: "editreply" },
      interaction
    );

  client.radioStart(channel);

  Schema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
    if (data) {
      data.Channel = channel.id;
      data.save();
    } else {
      new Schema({
        Guild: interaction.guild.id,
        Channel: channel.id,
      }).save();
    }
  });

  client.embed(
    {
      title: `<:_:1172395170726162472>・Started radio`,
      desc: `Radio has started successfully \nTo make Zprium leave do: \`rleave\``,
      fields: [
        {
          name: "<:_:1170778648870125721>┆Started By",
          value: `${interaction.user} (${interaction.user.tag})`,
          inline: true,
        },
        {
          name: "<a:_:1171909730512412794>┆Channel",
          value: `${channel} (${channel.name})`,
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

  let embed = new Discord.EmbedBuilder()
    .setTitle(`<:_:1172395170726162472>・Started radio`)
    .setDescription(`_______________ \n\nRadio has started successfully`)
    .addFields(
      {
        name: "<:_:1170778648870125721>┆Started By",
        value: `${interaction.user} (${interaction.user.tag})`,
        inline: true,
      },
      {
        name: "<a:_:1171909730512412794>┆Channel",
        value: `${channel} (${channel.name})`,
        inline: true,
      },
      {
        name: "<:_:1171218160435875981>┆Club",
        value: `${interaction.guild.name} (${interaction.guild.id})`,
        inline: true,
      }
    )
    .setColor(client.config.colors.normal)
    .setTimestamp();
  webhookClientLogs.send({
    username: "Zprium Logs",
    embeds: [embed],
  });
};
