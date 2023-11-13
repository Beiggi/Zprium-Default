const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports = async (client, interaction, args) => {
  const duration = moment
    .duration(client.uptime)
    .format("`D` [days], `H` [hrs], `m` [mins], `s` [secs]");
  const upvalue = (Date.now() / 1000 - client.uptime / 1000).toFixed(0);

  client.embed(
    {
      title: `<a:_:1171988120036724787>・Uptime`,
      desc: `See the uptime of Zprium`,
      fields: [
        {
          name: "<a:_:1171988120036724787>┇Uptime",
          value: `${duration}`,
          inline: true,
        },
        {
          name: "<a:_:1170110120844341328>┇Up Since",
          value: `<t:${upvalue}>`,
          inline: true,
        },
      ],
      type: "editreply",
    },
    interaction
  );
};
