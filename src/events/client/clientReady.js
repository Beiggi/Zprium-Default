const Discord = require("discord.js");
const chalk = require("chalk");
const { random } = require("mathjs");

module.exports = async (client) => {
  const startLogs = new Discord.WebhookClient({
    id: client.webhooks.startLogs.id,
    token: client.webhooks.startLogs.token,
  });

  console.log(`\u001b[0m`);
  console.log(
    chalk.blue(chalk.bold(`System`)),
    chalk.white(`>>`),
    chalk.red(`Shard #${client.shard.ids[0] + 1}`),
    chalk.green(`is ready!`)
  );
  console.log(
    chalk.blue(chalk.bold(`Zprium`)),
    chalk.white(`>>`),
    chalk.green(`Started on`),
    chalk.red(`${client.guilds.cache.size}`),
    chalk.green(`servers!`)
  );

  let embed = new Discord.EmbedBuilder()
    .setTitle(`<a:_:1171926478364082276>・Finishing shard`)
    .setDescription(`A shard just finished`)
    .addFields(
      {
        name: "<:_:1172391826406248518>┆ID",
        value: `${client.shard.ids[0] + 1}/${client.options.shardCount}`,
        inline: true,
      },
      { name: "<a:_:1171984523706257418>┆State", value: `Ready`, inline: true }
    )
    .setColor(client.config.colors.normal);
  startLogs.send({
    username: "Zprium Logs",
    embeds: [embed],
  });

  setInterval(async function () {
    const promises = [client.shard.fetchClientValues("guilds.cache.size")];
    return Promise.all(promises).then((results) => {
      const totalGuilds = results[0].reduce(
        (acc, guildCount) => acc + guildCount,
        0
      );
      let statuttext;
      if (process.env.DISCORD_STATUS) {
        statuttext = process.env.DISCORD_STATUS.split(", ");
      } else {
        statuttext = [
          "・❓・/help for info!",
          `・💎・Vilorux Wacrux Private Bot`,
          `・📩・discord.gg/NppaPym343`,
          `・⚙️・Nice commands and fun!`,
          `・🤖・Version ${require(`${process.cwd()}/package.json`).version}`,
        ];
      }
      const randomText =
        statuttext[Math.floor(Math.random() * statuttext.length)];
      client.user.setPresence({
        activities: [{ name: randomText, type: Discord.ActivityType.Playing }],
        status: "online",
      });
    });
  }, 50000);

  client.player.init(client.user.id);
};
