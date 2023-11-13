const Discord = require("discord.js");
const mongoose = require("mongoose");

module.exports = async (client, interaction, args) => {
  client
    .simpleEmbed(
      {
        desc: `<a:_:1171984523706257418> Calculating ping...`,
        type: "editreply",
      },
      interaction
    )
    .then((resultMessage) => {
      const ping = Math.floor(
        resultMessage.createdTimestamp - interaction.createdTimestamp
      );

      mongoose.connection.db.admin().ping(function (err, result) {
        var mongooseSeconds = (result.ok % 60000) / 1000;
        var pingSeconds = (ping % 60000) / 1000;
        var apiSeconds = (client.ws.ping % 60000) / 1000;

        client.embed(
          {
            title: `${client.emotes.normal.pong}・Pong`,
            desc: `Check out how fast Zprium is`,
            fields: [
              {
                name: "<:_:1171218157042679838>┆Zprium latency",
                value: `${ping}ms (${pingSeconds}s)`,
                inline: true,
              },
              {
                name: "<a:_:1170109219807174757>┆API Latency",
                value: `${client.ws.ping}ms (${apiSeconds}s)`,
                inline: true,
              },
              {
                name: "<a:_:1170108545040121887>┆Database Latency",
                value: `${result.ok}ms (${mongooseSeconds}s)`,
                inline: true,
              },
            ],
            type: "editreply",
          },
          interaction
        );
      });
    });
};
