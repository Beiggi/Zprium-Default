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
      { error: `The channel does not exist!`, type: "editreply" },
      interaction
    );

  client.radioStop(channel);

  var remove = await Schema.deleteOne({ Guild: interaction.guild.id });

  client.embed(
    {
      title: `<:_:1172395170726162472>・Radio stopped`,
      desc: `Radio has stopped successfully \nTo make Zprium join do: \`rplay\``,
      fields: [
        {
          name: "<:_:1170778648870125721>┆Stopped By",
          value: `${interaction.user} (${interaction.user.tag})`,
          inline: true,
        },
        {
          name: "<a:_:1171909730512412794>┆Channel",
          value: `${channel} (${channel.name})`,
          inline: true,
        },
      ],
      type: "editreply",
    },
    interaction
  );

  let embed = new Discord.EmbedBuilder()
    .setTitle(`<:_:1172395170726162472>・Radio stopped`)
    .setDescription(`_______________ \n\nRadio has stopped successfully`)
    .addFields(
      {
        name: "<:_:1170778648870125721>┆Stopped By",
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
