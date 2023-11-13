const Discord = require("discord.js");

module.exports = (client, giveaway, winners) => {
  winners.forEach((member) => {
    client
      .embed(
        {
          title: `<a:_:1170454947872116806>・Giveaway ended`,
          desc: `Congratulations ${member.user.username}! You won the giveaway!`,
          fields: [
            {
              name: `<a:_:1172256662472638575>┆Prize`,
              value: `${giveaway.prize}`,
              inline: true,
            },
            {
              name: `<a:_:1172258100691087401>┆Giveaway`,
              value: `[Click here](https://discordapp.com/channels/${giveaway.message.guildId}/${giveaway.message.channelId}/${giveaway.message.id})`,
              inline: true,
            },
          ],
        },
        member
      )
      .catch(() => {});
  });
};
