const discord = require("discord.js");

module.exports = async (client, role) => {
  const logsChannel = await client.getLogs(role.guild.id);
  if (!logsChannel) return;

  client
    .embed(
      {
        title: `<a:_:1170113816714023083>・Role deleted`,
        desc: `A role has been deleted`,
        fields: [
          {
            name: `> Role`,
            value: `- ${role}`,
          },
          {
            name: `> Name`,
            value: `- ${role.name}`,
          },
          {
            name: `> ID`,
            value: `- ${role.id}`,
          },
          {
            name: `> Color`,
            value: `${role.hexColor}`,
          },
          {
            name: `> Position`,
            value: `${role.position}`,
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
