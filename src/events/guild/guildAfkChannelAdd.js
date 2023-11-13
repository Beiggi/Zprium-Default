const Discord = require("discord.js");

module.exports = async (client, guild, afkChannel) => {
  const logsChannel = await client.getLogs(guild.id);
  if (!logsChannel) return;

  client
    .embed(
      {
        title: `<a:_:1171877296836186153>・New AFK channel`,
        desc: `An AFK channel has been added to the Club`,
        fields: [
          {
            name: `> Channel`,
            value: `- ${afkChannel}`,
          },
          {
            name: `> Name`,
            value: `- ${afkChannel.name}`,
          },
          {
            name: `> ID`,
            value: `- ${afkChannel.id}`,
          },
          {
            name: `> Timestamp`,
            value: `- <t:${Math.floor(afkChannel.createdTimestamp / 1000)}:R>`,
          },
        ],
      },
      logsChannel
    )
    .catch(() => {});
};
