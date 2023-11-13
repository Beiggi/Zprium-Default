const Discord = require("discord.js");

module.exports = async (client, interaction, args) => {
  let row = new Discord.ActionRowBuilder().addComponents(
    new Discord.ButtonBuilder()
      .setLabel("Support server")
      .setURL(client.config.discord.serverInvite)
      .setStyle(Discord.ButtonStyle.Link)
  );

  client.embed(
    {
      title: `<a:_:1170105530728075314>・Support`,
      desc: `Join our support server, we are here to help you!`,
      image:
        "https://media.tenor.com/C8Yr_YcPOn8AAAAC/discord-banner-discord-profile.gif",
      url: client.config.discord.serverInvite,
      components: [row],
      type: "editreply",
    },
    interaction
  );
};
