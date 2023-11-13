const { CommandInteraction, Client } = require("discord.js");
const { SlashCommandBuilder } = require("discord.js");
const Discord = require("discord.js");

const model = require("../../database/models/badge");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("developers")
    .setDescription("Commands for Zprium developers")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("help")
        .setDescription(
          "Get information about the developers category commands"
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("eval")
        .setDescription("Get the result of a piece of code")
        .addStringOption((option) =>
          option.setName("code").setDescription("Your code").setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("badge")
        .setDescription("Manage Zprium badges")
        .addBooleanOption((option) =>
          option
            .setName("new")
            .setDescription("Select a boolean")
            .setRequired(true)
        )
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Select a user")
            .setRequired(true)
        )
        .addStringOption((option) =>
          option
            .setName("badge")
            .setDescription("Choose your badge")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("ban")
        .setDescription("Manage Zprium bans")
        .addBooleanOption((option) =>
          option
            .setName("new")
            .setDescription("Select a boolean")
            .setRequired(true)
        )
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Select a user")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("args")
        .setDescription("Post preset messages")
        .addStringOption((option) =>
          option
            .setName("message")
            .setDescription("Select a message")
            .setRequired(true)
            .addChoices(
              { name: "Information", value: "information" },
              { name: "Rules", value: "rules" },
              { name: "Applications", value: "applications" },
              { name: "Booster perks", value: "boosterperks" },
              { name: "Links", value: "links" },
              { name: "Rewards", value: "rewards" }
            )
        )
    ),
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */

  run: async (client, interaction, args) => {
    model.findOne({ User: interaction.user.id }, async (err, data) => {
      if (data && data.FLAGS.includes("DEVELOPER")) {
        await interaction.deferReply({ fetchReply: true });
        client.loadSubcommands(client, interaction, args);
      } else {
        return client.errNormal(
          {
            error: "Only Zprium developers are allowed to do this",
            type: "ephemeral",
          },
          interaction
        );
      }
    });
  },
};
