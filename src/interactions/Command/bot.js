const { CommandInteraction, Client } = require("discord.js");
const { SlashCommandBuilder } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("zprium")
    .setDescription("Information about Zprium")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("help")
        .setDescription("Get information about Zprium category commands")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("info").setDescription("Get information about Zprium")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("ping").setDescription("See Zprium's ping in ms")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("changelogs")
        .setDescription("Get the changelogs of Zprium")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("donate").setDescription("Get Zprium donate link")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("links")
        .setDescription("Get a message with all Zprium links")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("owner").setDescription("Get info about the owner")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("socials").setDescription("Get Zprium socials")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("support")
        .setDescription("Get an invite of the support server")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("uptime").setDescription("Show Zprium uptime")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("feedback")
        .setDescription("Send your opinion about Zprium to the developers")
        .addStringOption((option) =>
          option
            .setName("feedback")
            .setDescription("Your feedback")
            .setRequired(true)
        )
    ),

  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */

  run: async (client, interaction, args) => {
    await interaction.deferReply({ fetchReply: true });
    client.loadSubcommands(client, interaction, args);
  },
};
