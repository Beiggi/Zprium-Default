const discord = require("discord.js");

module.exports = async (client, role, oldColor, newColor) => {
  const logsChannel = await client.getLogs(role.guild.id);
  if (!logsChannel) return;

  client
    .embed(
      {
        title: `<a:_:1170113816714023083>・Role color updated`,
        desc: `A role has been updated`,
        fields: [
          {
            name: `> Role`,
            value: `- ${role}`,
          },
          {
            name: `> Before`,
            value: `- #${oldColor.toString(16)}`,
          },
          {
            name: `> After`,
            value: `- #${newColor.toString(16)}`,
          },
          {
            name: `> ID`,
            value: `${role.id}`,
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
