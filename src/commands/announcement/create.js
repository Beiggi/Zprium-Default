const Discord = require("discord.js");

module.exports = async (client, interaction, args) => {
  const message = interaction.options.getString("message");
  const channel = interaction.options.getChannel("channel");

  client.embed(
    {
      title: `<a:_:1169206241772437614>・Announcement!`,
      desc: message,
    },
    channel
  );

  client.succNormal(
    {
      text: `Announcement has been sent successfully!`,
      fields: [
        {
          name: `<a:_:1171909730512412794>┆Channel`,
          value: `${channel} (${channel.name})`,
        },
      ],
      type: "editreply",
    },
    interaction
  );
};
