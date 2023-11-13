const Discord = require("discord.js");

module.exports = async (client, interaction, args) => {
  var result = Math.ceil(Math.random() * 6);

  client.embed(
    {
      title: `<a:_:1172205293145432085>・Roll`,
      desc: `You rolled ${result}`,
      type: "editreply",
    },
    interaction
  );
};
