const Discord = require("discord.js");
const ms = require("ms");

module.exports = async (client, interaction, args) => {
  const gchannel = interaction.options.getChannel("channel");
  const duration = interaction.options.getString("duration");
  const winnerCount = interaction.options.getNumber("winners");
  const prize = interaction.options.getString("prize");

  client.giveawaysManager
    .start(gchannel, {
      duration: ms(duration),
      prize: `<a:_:1172256662472638575> - ${prize}`,
      lastChance: {
        enabled: true,
        content: `<a:_:1171979021668581468> **LAST CHANCE TO ENTER !** <a:_:1171979021668581468>`,
        threshold: 5000,
        embedColor: "#FF0000",
      },
      pauseOptions: {
        isPaused: true,
        content:
          "<a:_:1171127653265322034> **THIS GIVEAWAY IS PAUSED !** <a:_:1171127653265322034>",
        unPauseAfter: null,
        embedColor: "#FFFF00",
      },
      winnerCount: parseInt(winnerCount),
      hostedBy: interaction.user,
      thumbnail: interaction.guild.iconURL({ dynamic: true, size: 1024 }),
      isDrop: true,
      messages: {
        giveaway: `<a:_:1170454947872116806> **GIVEAWAY** <a:_:1170454947872116806>`,
        giveawayEnded: `<a:_:1170454947872116806> **GIVEAWAY ENDED** <a:_:1170454947872116806>`,
        drawing: `<a:_:1170110120844341328> - Ends at: **{timestamp}**!`,
        dropMessage: `Be the first to react with 🎉`,
        winMessage:
          "Congratulations {winners}! You just won the **{this.prize}** !",
        embedFooter: "Giveaway!",
        embedColor: client.config.colors.normal,
        noWinner: "Giveaway canceled, not enough participants. \n",
        hostedBy: `<a:_:1170454947872116806> - Hosted by: {this.hostedBy}`,
        winners: `<a:_:1172258100691087401> - Winner(s)`,
        endedAt: "Ends at:",
        units: {
          seconds: "seconds",
          minutes: "minutes",
          hours: "hours",
          days: "days",
          pluralS: false,
        },
      },
    })
    .then((gData) => {
      client.succNormal(
        {
          text: `Giveaway started in ${gchannel}`,
          type: "ephemeraledit",
        },
        interaction
      );
    });
};
