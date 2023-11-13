const Discord = require("discord.js");

module.exports = async (client) => {
  client.on(Discord.Events.InteractionCreate, async (interaction) => {
    if (!interaction.isStringSelectMenu()) return;

    if (interaction.customId == "Zprium-linkspanel") {
      if (interaction.values == "support-linkspanel") {
        interaction.deferUpdate();

        const row2 = new Discord.ActionRowBuilder().addComponents(
          new Discord.StringSelectMenuBuilder()
            .setCustomId("Zprium-linkspanel")
            .setPlaceholder("❌┆Nothing selected")
            .addOptions([
              {
                label: `Support server`,
                description: `Join the support server`,
                emoji: "❓",
                value: "support-linkspanel",
              },
              {
                label: `Invite your friends`,
                description: `Invite your friends to the Club`,
                emoji: "📨",
                value: "invite-linkspanel",
              },
            ])
        );

        let row = new Discord.ActionRowBuilder().addComponents(
          new Discord.ButtonBuilder()
            .setLabel("Support Server")
            .setURL(client.config.discord.serverInvite)
            .setStyle(Discord.ButtonStyle.Link)
        );

        client.embed(
          {
            title: `<a:_:1170105530728075314>・Support Server`,
            desc: `Join the support server if you have serious problems and require instant attention!`,
            image:
              "https://cdn.discordapp.com/attachments/843487478881976381/874694194474668052/Bot_banner_invite.jpg",
            url: client.config.discord.serverInvite,
            components: [row2, row],
            type: "edit",
          },
          interaction.message
        );
      }
    }
  });
};
