const Discord = require("discord.js");

const Schema = require("../../database/models/userBans");

const webhookClientLogs = new Discord.WebhookClient({
  id: "",
  token: "",
});

module.exports = async (client, interaction, args) => {
  const boolean = interaction.options.getBoolean("new");
  const member = interaction.options.getUser("user");

  if (boolean == true) {
    if (member.id === interaction.user.id) {
      // add the check here
      return client.errNormal(
        {
          error: `You cannot ban yourself from Zprium`,
          type: `editreply`,
        },
        interaction
      );
    }

    Schema.findOne({ User: member.id }, async (err, data) => {
      if (data) {
        return client.errNormal(
          {
            error: `<@!${member.id}> (${member.id}) has already been banned from Zprium`,
            type: `editreply`,
          },
          interaction
        );
      } else {
        new Schema({
          User: member.id,
        }).save();

        client.succNormal(
          {
            text: `<@!${member.id}> (${member.id}) banned from Zprium`,
            type: "editreply",
          },
          interaction
        );

        let embedLogs = new Discord.EmbedBuilder()
          .setTitle(`<a:_:1170788402354995330>・Ban added`)
          .setDescription(`<@!${member.id}> (${member.id}) banned from Zprium`)
          .addFields({
            name: "<:_:1170778648870125721>┆Banned By",
            value: `${interaction.user} (${interaction.user.tag})`,
            inline: true,
          })
          .setColor(client.config.colors.normal)
          .setFooter({ text: client.config.discord.footer })
          .setTimestamp();
        webhookClientLogs.send({
          username: "Zprium Bans",
          embeds: [embedLogs],
        });
      }
    });
  } else if (boolean == false) {
    Schema.findOne({ User: member.id }, async (err, data) => {
      if (data) {
        Schema.findOneAndDelete({ User: member.id }).then(() => {
          client.succNormal(
            {
              text: `<@!${member.id}> (${member.id}) unbanned from Zprium`,
              type: "editreply",
            },
            interaction
          );

          let embedLogs = new Discord.EmbedBuilder()
            .setTitle(`<a:_:1170788402354995330>・Ban removed`)
            .setDescription(
              `<@!${member.id}> (${member.id}) unbanned from Zprium`
            )
            .addFields({
              name: "<:_:1170778648870125721>┆Unbanned By",
              value: `${interaction.user} (${interaction.user.tag})`,
              inline: true,
            })
            .setColor(client.config.colors.normal)
            .setFooter({ text: client.config.discord.footer })
            .setTimestamp();
          webhookClientLogs.send({
            username: "Zprium Bans",
            embeds: [embedLogs],
          });
        });
      } else {
        return client.errNormal(
          {
            error: `<@!${member.id}> (${member.id}) has not been banned from Zprium`,
            type: `editreply`,
          },
          interaction
        );
      }
    });
  }
};
