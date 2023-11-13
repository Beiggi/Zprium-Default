const { CommandInteraction, Client } = require("discord.js");
const { SlashCommandBuilder } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("activities")
    .setDescription("Start a activity")
    .addStringOption((option) =>
      option
        .setName("activity")
        .setDescription("The activity that you want")
        .setRequired(true)
        .addChoices(
          { name: "Watch Together", value: "watchtogether" },
          { name: "Gartic Phone", value: "garticphone" },
          { name: "Putt Party", value: "puttparty" },
          { name: "Poker Night", value: "pokernight" },
          { name: "Chess In The Park", value: "chessinthepark" },
          { name: "Whiteboard", value: "whiteboard" },
          { name: "Blazing 8s", value: "blazing8s" },
          { name: "Know What I Meme", value: "knowwhatimeme" },
          { name: "Chef Showdown", value: "chefshowdown" },
          { name: "Bobble League", value: "bobbleleague" },
          { name: "Land-io", value: "land-io" },
          { name: "Sketch Heads", value: "sketchheads" },
          { name: "Color Together", value: "colortogether" },
          { name: "SpellCast", value: "spellcast" },
          { name: "Letter League", value: "letterleague" },
          { name: "Checkers In The Park", value: "checkersinthepark" },
          { name: "Bobble Bash", value: "bobblebash" },
          { name: "Krunker Strike FRVR", value: "krunkerstrikefrvr" }
        )
    ),
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */

  run: async (client, interaction, args) => {
    await interaction.deferReply({ fetchReply: true });
    const activity = interaction.options.getString("activity");

    const channel = interaction.member.voice.channel;
    if (!channel)
      return client.errNormal(
        {
          error: `You're not in a voice channel!`,
          type: "editreply",
        },
        interaction
      );

    if (activity == "watchtogether") {
      client.generateActivity(
        "880218394199220334",
        "Watch Together",
        channel,
        interaction
      );
    } else if (activity == "garticphone") {
      client.generateActivity(
        "1007373802981822582",
        "Gartic Phone",
        channel,
        interaction
      );
    } else if (activity == "puttparty") {
      client.generateActivity(
        "945737671223947305",
        "Putt Party",
        channel,
        interaction
      );
    } else if (activity == "pokernight") {
      client.generateActivity(
        "755827207812677713",
        "Poker Night",
        channel,
        interaction
      );
    } else if (activity == "chessinthepark") {
      client.generateActivity(
        "832012774040141894",
        "Chess In The Park",
        channel,
        interaction
      );
    } else if (activity == "whiteboard") {
      client.generateActivity(
        "1070087967294631976",
        "Whiteboard",
        channel,
        interaction
      );
    } else if (activity == "blazing8s") {
      client.generateActivity(
        "832025144389533716",
        "Blazing 8s",
        channel,
        interaction
      );
    } else if (activity == "knowwhatimeme") {
      client.generateActivity(
        "1078728822972764312",
        "Know What I Meme",
        channel,
        interaction
      );
    } else if (activity == "chefshowdown") {
      client.generateActivity(
        "1037680572660727838",
        "Chef Showdown",
        channel,
        interaction
      );
    } else if (activity == "bobbleleague") {
      client.generateActivity(
        "947957217959759964",
        "Bobble League",
        channel,
        interaction
      );
    } else if (activity == "land-io") {
      client.generateActivity(
        "903769130790969345",
        "Land-io",
        channel,
        interaction
      );
    } else if (activity == "sketchheads") {
      client.generateActivity(
        "902271654783242291",
        "Sketch Heads",
        channel,
        interaction
      );
    } else if (activity == "colortogether") {
      client.generateActivity(
        "1039835161136746497",
        "Color Together",
        channel,
        interaction
      );
    } else if (activity == "spellcast") {
      client.generateActivity(
        "852509694341283871",
        "SpellCast",
        channel,
        interaction
      );
    } else if (activity == "letterleague") {
      client.generateActivity(
        "879863686565621790",
        "Letter League",
        channel,
        interaction
      );
    } else if (activity == "checkersinthepark") {
      client.generateActivity(
        "832013003968348200",
        "Checkers In The Park",
        channel,
        interaction
      );
    } else if (activity == "bobblebash") {
      client.generateActivity(
        "1107689944685748377",
        "Bobble Bash",
        channel,
        interaction
      );
    } else if (activity == "krunkerstrikefrvr") {
      client.generateActivity(
        "1011683823555199066",
        "Krunker Strike FRVR",
        channel,
        interaction
      );
    }
  },
};
