const Discord = require("discord.js");

module.exports = async (client, interaction, args) => {
  let row = new Discord.ActionRowBuilder().addComponents(
    new Discord.ButtonBuilder()
      .setLabel("Beiggi Paypal")
      .setURL("https://paypal.me/idlc631?country.x=IT&locale.x=en_US")
      .setStyle(Discord.ButtonStyle.Link)
  );

  client.embed(
    {
      title: `${client.user.username}・Donate`,
      desc: "_____ \n\nClick the button below to access my Paypal page \n**Thank you for your support!**",
      thumbnail: client.user.avatarURL({ dynamic: true }),
      url: "https://paypal.me/idlc631?country.x=IT&locale.x=en_US",
      components: [row],
      type: "editreply",
    },
    interaction
  );
};
