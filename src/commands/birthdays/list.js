const Discord = require("discord.js");

const Schema = require("../../database/models/birthday");

module.exports = async (client, interaction, args) => {
  const rawBirthdayboard = await Schema.find({ Guild: interaction.guild.id });

  if (rawBirthdayboard.length < 1)
    return client.errNormal(
      {
        error: "No birthdays found!",
        type: "editreply",
      },
      interaction
    );

  const lb = rawBirthdayboard.map(
    (e) => `<a:_:1169381530813075577> | **<@!${e.User}>** - ${e.Birthday} `
  );

  await client.createLeaderboard(
    `<:_:1171218160435875981>・Birthdays - ${interaction.guild.name}`,
    lb,
    interaction
  );
};
