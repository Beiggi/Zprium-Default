const Discord = require("discord.js");

module.exports = async (client) => {
  client
    .on(Discord.Events.InteractionCreate, async (interaction) => {
      if (!interaction.isStringSelectMenu()) return;

      if (interaction.customId == "Zprium-helppanel") {
        if (interaction.values == "changelogs-Zpriumhelp") {
          interaction.deferUpdate();

          const row = new Discord.ActionRowBuilder().addComponents(
            new Discord.StringSelectMenuBuilder()
              .setCustomId("Zprium-helppanel")
              .setPlaceholder("❌┆Nothing selected")
              .addOptions([
                {
                  label: `Commands`,
                  description: `Show the commands of Zprium!`,
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
                  description: `Show the Zprium changelogs`,
                  emoji: "📃",
                  value: "changelogs-Zpriumhelp",
                },
              ])
          );

          client.embed(
            {
              title: "<a:_:1171924485520248864>・Changelogs",
              desc: `_____`,
              thumbnail: client.user.avatarURL({ size: 1024 }),
              fields: [
                {
                  name: "<a:_:1169206241772437614>┆Alert!",
                  value:
                    "This is the changelogs of Zprium, here you can see the changes that have been made to Zprium.",
                  inline: false,
                },
                {
                  name: "<a:_:1171924485520248864>┆Changelogs",
                  value:
                    "10/12/2022 - Updated Zprium to the latest version of discord.js (v14)",
                  inline: false,
                },
              ],
              components: [row],
              type: "edit",
            },
            interaction.message
          );
        }
      }
    })
    .setMaxListeners(0);
};
