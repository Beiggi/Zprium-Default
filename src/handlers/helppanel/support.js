const Discord = require("discord.js");

module.exports = async (client) => {
  client
    .on(Discord.Events.InteractionCreate, async (interaction) => {
      if (!interaction.isStringSelectMenu()) return;

      if (interaction.customId == "Zprium-helppanel") {
        if (interaction.values == "support-Zpriumhelp") {
          interaction.deferUpdate();

          const row2 = new Discord.ActionRowBuilder().addComponents(
            new Discord.StringSelectMenuBuilder()
              .setCustomId("Zprium-helppanel")
              .setPlaceholder("❌┆Nothing selected")
              .addOptions([
                {
                  label: `Commands`,
                  description: `Show the commands of ${client.user.username}!`,
                  emoji: "💻",
                  value: "commands-Zpriumhelp",
                },
                {
                  label: `Invite your friends`,
                  description: `Invite your friends to the Club`,
                  emoji: "📨",
                  value: "invite-Zpriumhelp",
                },
                {
                  label: `Support server`,
                  description: `Join the support server`,
                  emoji: "❓",
                  value: "support-Zpriumhelp",
                },
                {
                  label: `Changelogs`,
                  description: `Show the ${client.user.username} changelogs`,
                  emoji: "📃",
                  value: "changelogs-Zpriumhelp",
                },
              ])
          );

          let row = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
              .setLabel("Support server")
              .setURL(client.config.discord.serverInvite)
              .setStyle(Discord.ButtonStyle.Link)
          );

          client.embed(
            {
              title: `<a:_:1170105530728075314>・Support`,
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
    })
    .setMaxListeners(0);
};
