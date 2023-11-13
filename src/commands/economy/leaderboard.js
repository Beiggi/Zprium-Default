const Discord = require("discord.js");

const Schema = require("../../database/models/economy");

module.exports = async (client, interaction, args) => {
  const type = interaction.options.getString("type");

  if (type == "money") {
    const rawLeaderboard = await Schema.find({
      Guild: interaction.guild.id,
    }).sort([["Money", "descending"]]);

    if (!rawLeaderboard)
      return client.errNormal(
        {
          error: "No data found!",
          type: "editreply",
        },
        interaction
      );

    const lb = rawLeaderboard.map(
      (e) =>
        `**${
          rawLeaderboard.findIndex(
            (i) => i.Guild === interaction.guild.id && i.User === e.User
          ) + 1
        }** | <@!${e.User}> - <a:_:1170793429832323132> \`$${e.Money}\``
    );

    await client.createLeaderboard(
      `<a:_:1170793429832323132>・Money - ${interaction.guild.name}`,
      lb,
      interaction
    );
  } else if (type == "bank") {
    const rawLeaderboard = await Schema.find({
      Guild: interaction.guild.id,
    }).sort([["Bank", "descending"]]);

    if (!rawLeaderboard)
      return client.errNormal(
        {
          error: "No data found!",
          type: "editreply",
        },
        interaction
      );

    const lb = rawLeaderboard.map(
      (e) =>
        `**${
          rawLeaderboard.findIndex(
            (i) => i.Guild === interaction.guild.id && i.User === e.User
          ) + 1
        }** | <@!${e.User}> - <:_:1171021728466612254> \`$${e.Bank}\``
    );

    await client.createLeaderboard(
      `<:_:1171021728466612254>・Bank - ${interaction.guild.name}`,
      lb,
      interaction
    );
  }
};
