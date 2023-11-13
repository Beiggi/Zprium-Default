const Discord = require("discord.js");

module.exports = async (client, guild, url) => {
  const logsChannel = await client.getLogs(guild.id);
  if (!logsChannel) return;

  client
    .embed(
      {
        title: `<:_:1170104007977619586>・New Vanity URL`,
        desc: `The Club vanity URL has been updated`,
        fields: [
          {
            name: `> URL`,
            value: `- ${url}`,
          },
          {
            name: `> Timestamp`,
            value: `- <t:${Math.floor(Date.now() / 1000)}:R>`,
          },
        ],
      },
      logsChannel
    )
    .catch(() => {});
};
