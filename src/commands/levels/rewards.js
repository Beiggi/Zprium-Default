const Discord = require("discord.js");

const Schema = require("../../database/models/levelRewards");

module.exports = async (client, interaction, args) => {
  const rawLeaderboard = await Schema.find({ Guild: interaction.guild.id });

  if (rawLeaderboard.length < 1)
    return client.errNormal(
      {
        error: `No rewards found!`,
        type: "editreply",
      },
      interaction
    );

  const lb = rawLeaderboard.map((e) => `**Level ${e.Level}** - <@&${e.Role}>`);

  await client.createLeaderboard(
    `<a:_:1172271518370254938>・Level rewards - ${interaction.guild.name}`,
    lb,
    interaction
  );
};
