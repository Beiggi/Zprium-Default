const Discord = require("discord.js");

const webhookClient = new Discord.WebhookClient({
  id: "1164855370532007958",
  token: "L7aAsxIb8YuR79mkFeCb-EVxzHaqySOm77O52UVB5f9tndCY9hXVwkfokKyz_HnUgaaq",
});

module.exports = async (client, interaction, args) => {
  const feedback = interaction.options.getString("feedback");

  const embed = new Discord.EmbedBuilder()
    .setTitle(`<a:_:1170096318392324196>・New feedback!`)
    .addFields({
      name: "User",
      value: `${interaction.user} (${interaction.user.tag})`,
      inline: true,
    })
    .setDescription(`${feedback}`)
    .setColor(client.config.colors.normal);
  webhookClient.send({
    username: "Zprium Feedback",
    embeds: [embed],
  });

  client.succNormal(
    {
      text: `Feedback successfully sent to the developers`,
      type: "editreply",
    },
    interaction
  );
};
