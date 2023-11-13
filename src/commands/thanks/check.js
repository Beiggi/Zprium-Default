const Discord = require("discord.js");
const thanksSchema = require("../../database/models/thanks");

module.exports = async (client, interaction, args) => {
  const member = interaction.options.getUser("user");

  thanksSchema.findOne({ User: member.id }, async (err, data) => {
    if (data) {
      return client.embed(
        {
          title: `<a:_:1172582863120650270>・Thanks`,
          desc: `**${member.tag}** has \`${data.Received}\` thanks`,
          type: "editreply",
        },
        interaction
      );
    } else {
      return client.embed(
        {
          title: `<a:_:1172582863120650270>・Thanks`,
          desc: `**${member.tag}** has \`0\` thanks`,
          type: "editreply",
        },
        interaction
      );
    }
  });
};
