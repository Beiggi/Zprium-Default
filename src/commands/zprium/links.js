const Discord = require("discord.js");

module.exports = async (client, interaction, args) => {
  const row = new Discord.ActionRowBuilder().addComponents(
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

  client.embed(
    {
      title: `<:_:1170104007977619586>・Links`,
      desc: `Access all Zprium links! Choose the link you need in the menu below`,
      image:
        "https://media.tenor.com/C8Yr_YcPOn8AAAAC/discord-banner-discord-profile.gif",
      components: [row],
      type: "editreply",
    },
    interaction
  );
};
