const Discord = require("discord.js");

const store = require("../../database/models/economyStore");

module.exports = async (client, interaction, args, message) => {
  store.find({ Guild: interaction.guild.id }, async (err, storeData) => {
    if (storeData && storeData.length > 0) {
      const lb = storeData.map(
        (e) =>
          `**<@&${e.Role}>** - <a:_:1170793429832323132> $${e.Amount} \n**To buy:** \`buy ${e.Role}\``
      );

      await client.createLeaderboard(
        `<:_:1171009162793193512>・${interaction.guild.name}'s Store`,
        lb,
        interaction
      );
      client.embed(
        {
          title: `<:_:1171218157042679838>・Zprium's Store`,
          desc: `**Fishingrod** - <a:_:1170793429832323132> $100 \n**To buy:** \`buy fishingrod\``,
        },
        interaction.channel
      );
    } else {
      client.errNormal(
        {
          error: `No store found in the Club!`,
          type: "editreply",
        },
        interaction
      );
    }
  });
};
