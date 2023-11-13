const Discord = require("discord.js");
const generator = require("generate-password");

module.exports = (client, err, command, interaction) => {
  console.log(err);
  const password = generator.generate({
    length: 10,
    numbers: true,
  });

  const errorlog = new Discord.WebhookClient({
    id: client.webhooks.errorLogs.id,
    token: client.webhooks.errorLogs.token,
  });

  let embed = new Discord.EmbedBuilder()
    .setTitle(`<a:_:1172844199205421066>・${password}`)
    .addFields(
      {
        name: "<:_:1171218160435875981>┇Club",
        value: `${interaction.guild.name} (${interaction.guild.id})`,
      },
      { name: `<a:_:1170100391589974026>┇Command`, value: `${command}` },
      { name: `<a:_:1171979021668581468>┇Error`, value: `\`\`\`${err}\`\`\`` },
      {
        name: `<a:_:1171127653265322034>┇Stack error`,
        value: `\`\`\`${err.stack.substr(0, 1018)}\`\`\``,
      }
    )
    .setColor(client.config.colors.normal);
  errorlog
    .send({
      username: `Zprium errors`,
      embeds: [embed],
    })
    .catch((error) => {
      console.log(error);
    });

  let row = new Discord.ActionRowBuilder().addComponents(
    new Discord.ButtonBuilder()
      .setLabel("Support server")
      .setURL(client.config.discord.serverInvite)
      .setStyle(Discord.ButtonStyle.Link)
  );

  client
    .embed(
      {
        title: `<a:_:1171979021668581468>・Error`,
        desc: `There was an error executing this command`,
        color: client.config.colors.error,
        fields: [
          {
            name: `Error code`,
            value: `\`${password}\``,
            inline: true,
          },
          {
            name: `What now?`,
            value: `You can contact the developers by joining the support server`,
            inline: true,
          },
        ],
        components: [row],
        type: "editreply",
      },
      interaction
    )
    .catch(() => {
      client.embed(
        {
          title: `<a:_:1171979021668581468>・Error`,
          desc: `There was an error executing this command`,
          color: client.config.colors.error,
          fields: [
            {
              name: `Error code`,
              value: `\`${password}\``,
              inline: true,
            },
            {
              name: `What now?`,
              value: `You can contact the developers by joining the support server`,
              inline: true,
            },
          ],
          components: [row],
          type: "editreply",
        },
        interaction
      );
    });
};
