const Discord = require("discord.js");

module.exports = async (client, interaction, args) => {
  const text = interaction.options.getString("text");

  client.embed(
    {
      title: `<:_:1172595800744923227>・Qrcode`,
      image: `https://api.qrserver.com/v1/create-qr-code/?size=1024x1024&data=${text.replace(
        new RegExp(" ", "g"),
        "%20"
      )}`,
      type: "editreply",
    },
    interaction
  );
};
