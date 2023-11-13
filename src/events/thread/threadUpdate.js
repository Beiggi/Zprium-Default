const discord = require("discord.js");

module.exports = async (client, oldChannel, newChannel) => {
  let types = {
    10: "News Thread",
    11: "Public Thread",
    12: "Private Thread",
  };

  const logsChannel = await client.getLogs(newChannel.guild.id);
  if (!logsChannel) return;

  client
    .embed(
      {
        title: `<:_:1170455516204507226>・Thread updated`,
        desc: `A thread has been updated`,
        fields: [
          {
            name: `> Old name`,
            value: `- ${oldChannel.name}`,
          },
          {
            name: `> New name`,
            value: `- ${newChannel.name}`,
          },
          {
            name: `> ID`,
            value: `- ${newChannel.id}`,
          },
          {
            name: `> Category`,
            value: `${newChannel.parent}`,
          },
          {
            name: `> Channel`,
            value: `<#${newChannel.id}>`,
          },
          {
            name: `> Type`,
            value: `${types[newChannel.type]}`,
          },
        ],
      },
      logsChannel
    )
    .catch(() => {});
};
