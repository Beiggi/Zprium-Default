const { CommandInteraction, Client } = require("discord.js");
const { SlashCommandBuilder } = require("discord.js");
const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Get help with Zprium"),

  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */

  run: async (client, interaction, args) => {
    await interaction.deferReply({ fetchReply: true });
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
            description: `Show Zprium changelogs`,
            emoji: "📃",
            value: "changelogs-Zpriumhelp",
          },
        ])
    );

    return client.embed(
      {
        title: `<a:_:1170105530728075314>・Help panel`,
        desc: `Welcome to Zprium's help panel! We have made a small overview to help you! Make a choice via the menu below`,
        image:
          "https://cdn.discordapp.com/attachments/843487478881976381/874694194474668052/Bot_banner_invite.jpg",
        fields: [
          {
            name: `<a:_:1171979021668581468>┆Menu doesn't work?`,
            value: `Try resending the command. If you get no reaction, make sure you report the bug!`,
          },
          {
            name: `<a:_:1172828986276057139>┆Found a bug?`,
            value: `Report this with \`/report bug\``,
          },
          {
            name: `<:_:1170104007977619586>┆Link`,
            value: `[Invite your friends](${client.config.discord.botInvite})`,
          },
        ],
        components: [row],
        type: "editreply",
      },
      interaction
    );
  },
};
