const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = async (client, interaction, args) => {
  const ip = interaction.options.getString("ip");

  if (ip == null)
    return client.errUsage(
      { usage: "mcstatus [ip]", type: "editreply" },
      interaction
    );

  fetch(`https://api.mcsrvstat.us/2/${ip}`)
    .then((res) => res.json())
    .catch({})
    .then(async (json) => {
      if (!json.players)
        return client.errNormal(
          { error: "Can't find the server!", type: "editreply" },
          interaction
        );

      return client.embed(
        {
          title: `<a:_:1171984523706257418>・${ip}`,
          thumbnail: `https://eu.mc-api.net/v3/server/favicon/${ip}`,
          fields: [
            {
              name: "<a:_:1170108545040121887>┇Online",
              value: `${json.online}`,
              inline: true,
            },
            {
              name: "<a:_:1172592925121724528>┇Version",
              value: `${json.version}`,
              inline: true,
            },
            {
              name: "👤┇Players online",
              value: `${json.players.online}/${json.players.max}`,
              inline: true,
            },
          ],
          type: "editreply",
        },
        interaction
      );
    })
    .catch({});
};
