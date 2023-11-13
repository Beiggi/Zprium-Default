const Discord = require("discord.js");

const Schema = require("../../database/models/economy");

module.exports = async (client, interaction, args) => {
  const user = interaction.options.getUser("user") || interaction.user;

  if (user.bot)
    return client.errNormal(
      {
        error: "You cannot see the balance of Zprium!",
        type: "editreply",
      },
      interaction
    );

  Schema.findOne(
    { Guild: interaction.guild.id, User: user.id },
    async (err, data) => {
      if (data) {
        let total = data.Money + data.Bank;

        client.embed(
          {
            title: `<a:_:1170793429832323132>・Balance`,
            fields: [
              {
                name: `<:_:1171022395105083454>┆Wallet`,
                value: `$${data.Money}`,
                inline: true,
              },
              {
                name: `<:_:1171021728466612254>┆Bank`,
                value: `$${data.Bank}`,
                inline: true,
              },
              {
                name: `<a:_:1171022078552580187>┆Total`,
                value: `$${total}`,
                inline: true,
              },
            ],
            desc: `The current balance of \`${user.tag}\``,
            type: "editreply",
          },
          interaction
        );
      } else {
        client.errNormal(
          {
            error: `The user doesn't have any money!`,
            type: "editreply",
          },
          interaction
        );
      }
    }
  );
};
