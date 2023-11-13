const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports = async (client, interaction, args) => {
  const promises = [
    client.shard.broadcastEval((client) => client.guilds.cache.size),
    client.shard.broadcastEval((client) =>
      client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)
    ),
    client.shard.broadcastEval((client) => client.channels.cache.size),
    client.shard.broadcastEval((client) => client.voice.adapters.size),
  ];
  return Promise.all(promises).then(async (results) => {
    const totalGuilds = results[0].reduce(
      (acc, guildCount) => acc + guildCount,
      0
    );
    const totalMembers = results[1].reduce(
      (acc, memberCount) => acc + memberCount,
      0
    );
    const totalChannels = results[2].reduce(
      (acc, channelCount) => acc + channelCount,
      0
    );
    const totalVoice = results[3].reduce(
      (acc, voiceCount) => acc + voiceCount,
      0
    );

    const duration = moment
      .duration(client.uptime)
      .format("`D` [days], `H` [hrs], `m` [mins], `s` [secs]");

    client.embed(
      {
        title: `<:_:1171218157042679838>・Zprium information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ size: 1024 }),
        fields: [
          {
            name: "<a:_:1169201314497040454>┆Information",
            value: `Zprium is a versatile Discord bot designed to provide a wide range of useful functions and commands to Club users.`,
            inline: false,
          },
          {
            name: "_____ \n\n│General",
            value: `_____`,
            inline: false,
          },
          {
            name: "<a:_:1170097290531315752>┆Name",
            value: `${client.user.username}`,
            inline: true,
          },
          {
            name: "<:_:1171218157042679838>┆Zprium id",
            value: `${client.user.id}`,
            inline: true,
          },
          {
            name: "<a:_:1171926478364082276>┆Shards",
            value: `\`${client.options.shardCount}\` shards`,
            inline: true,
          },
          {
            name: "<a:_:1171927572397961287>┆Zprium owner",
            value: `<@!1000988345658245170> `,
            inline: true,
          },
          {
            name: "<a:_:1170100030170988564>┆Zprium developer",
            value: `<@!1000988345658245170>`,
            inline: true,
          },
          {
            name: "<a:_:1170100391589974026>┆Commands",
            value: `\`${client.commands.size}\` commands`,
            inline: true,
          },
          {
            name: "<:_:1171928575243473057>┆Members",
            value: `\`${totalMembers}\` members`,
            inline: true,
          },
          {
            name: "<a:_:1171929475588567132>┆Connected channels",
            value: `\`${totalVoice}\` channels`,
            inline: true,
          },
          {
            name: "<a:_:1171909730512412794>┆Channels",
            value: `\`${totalChannels}\` channels`,
            inline: true,
          },
          {
            name: "<a:_:1171930054566084702>┆Created",
            value: `<t:${Math.round(client.user.createdTimestamp / 1000)}>`,
            inline: true,
          },

          {
            name: "_____ \n\n│System",
            value: `_____`,
            inline: false,
          },
          {
            name: "<a:_:1171988120036724787>┆Uptime",
            value: `${duration}`,
            inline: true,
          },
          {
            name: "<a:_:1170109219807174757>┆API speed:",
            value: `\`${client.ws.ping}\`ms`,
            inline: true,
          },
          {
            name: "<:_:1171218157042679838>┆Zprium Version",
            value: `\`${require(`${process.cwd()}/package.json`).version}\``,
            inline: true,
          },
          {
            name: "<:_:1170103169318137986>┆Node.js Version",
            value: `\`${process.version}\``,
            inline: true,
          },
          {
            name: "<:_:1170103523539697685>┆Discord.js Version",
            value: `\`${Discord.version}\``,
            inline: true,
          },
          {
            name: "<:_:1170103774195503206>┆Zprium memory",
            value: `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
              2
            )}\` MB`,
            inline: true,
          },
          {
            name: "<:_:1170104007977619586>┆Links",
            value: `Invite your friends: [[HERE]](${client.config.discord.botInvite}) \nSupport server: [[HERE]](${client.config.discord.serverInvite})`,
            inline: false,
          },
        ],
        type: "editreply",
      },
      interaction
    );
  });
};
