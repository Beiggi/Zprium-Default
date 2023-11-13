const { CommandInteraction, Client } = require("discord.js");
const { ContextMenuCommandBuilder } = require("discord.js");
const Discord = require("discord.js");

const model = require("../../database/models/badge");
const Schema = require("../../database/models/profile");

module.exports = {
  data: new ContextMenuCommandBuilder().setName("Zprium profile").setType(2),

  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */

  run: async (client, interaction, args) => {
    const badgeFlags = {
      DEVELOPER: client.emotes.badges.developer,
      EVENT: client.emotes.badges.event,
      BOOSTER: client.emotes.badges.booster,
      BUGS: client.emotes.badges.bug,
      MANAGEMENT: client.emotes.badges.management,
      PREMIUM: client.emotes.badges.premium,
      SUPPORTER: client.emotes.badges.supporter,
      TEAM: client.emotes.badges.team,
      BOOSTER: client.emotes.badges.booster,
      PARTNER: client.emotes.badges.partner,
      SUPPORT: client.emotes.badges.support,
      MODERATOR: client.emotes.badges.moderator,
      DESIGNER: client.emotes.badges.designer,
      MARKETING: client.emotes.badges.marketing,
      ACTIVE: client.emotes.badges.active,
      VIP: client.emotes.badges.vip,
    };

    const flags = {
      ActiveDeveloper: "👨‍💻・Active Developer",
      BugHunterLevel1: "🐛・Discord Bug Hunter",
      BugHunterLevel2: "🐛・Discord Bug Hunter",
      CertifiedModerator: "👮‍♂️・Certified Moderator",
      HypeSquadOnlineHouse1: "🏠・House Bravery Member",
      HypeSquadOnlineHouse2: "🏠・House Brilliance Member",
      HypeSquadOnlineHouse3: "🏠・House Balance Member",
      HypeSquadEvents: "🏠・HypeSquad Events",
      PremiumEarlySupporter: "👑・Early Supporter",
      Partner: "👑・Partner",
      Quarantined: "🔒・Quarantined", // Not sure if this is still a thing
      Spammer: "🔒・Spammer", // Not sure if this one works
      Staff: "👨‍💼・Discord Staff",
      TeamPseudoUser: "👨‍💼・Discord Team",
      VerifiedBot: "🤖・Verified Bot",
      VerifiedDeveloper: "👨‍💻・(early)Verified Bot Developer",
    };

    const user = interaction.guild.members.cache.get(interaction.targetId);

    Schema.findOne({ User: user.id }, async (err, data) => {
      if (data) {
        await interaction.deferReply({ fetchReply: true });
        let Badges = await model.findOne({ User: user.id });

        if (!Badges) Badges = { User: user.id };

        const userFlags = user.flags ? user.flags.toArray() : [];

        client.embed(
          {
            title: `${client.user.username}・Profile`,
            desc: "_____",
            thumbnail: user.avatarURL({ dynamic: true }),
            fields: [
              {
                name: "<:_:1170778648870125721>┆User",
                value: user.username,
                inline: true,
              },
              {
                name: "📘┆Discriminator",
                value: user.discriminator,
                inline: true,
              },
              {
                name: "<:_:1172391826406248518>┆ID",
                value: user.id,
                inline: true,
              },
              {
                name: "<:_:1172388548012412940>┆Gender",
                value: `${data.Gender || "Not set"}`,
                inline: true,
              },
              {
                name: "<a:_:1171930054566084702>┆Age",
                value: `${data.Age || "Not set"}`,
                inline: true,
              },
              {
                name: "<a:_:1169381093586260092>┆Birthday",
                value: `${data.Birthday || "Not set"}`,
                inline: true,
              },
              {
                name: "<a:_:1170112994118729910>┆Favorite color",
                value: `${data.Color || "Not set"}`,
                inline: true,
              },
              {
                name: "<a:_:1172384473631961108>┆Favorite pets",
                value: `${data.Pets.join(", ") || "Not set"}`,
                inline: true,
              },
              {
                name: "<a:_:1172382120988127273>┆Favorite food",
                value: `${data.Food.join(", ") || "Not set"}`,
                inline: true,
              },
              {
                name: "<a:_:1171872871665119232>┆Favorite songs",
                value: `${data.Songs.join(", ") || "Not set"}`,
                inline: true,
              },
              {
                name: "<a:_:1172381703642288138>┆Favorite artists",
                value: `${data.Artists.join(", ") || "Not set"}`,
                inline: true,
              },
              {
                name: "<a:_:1172383915227480104>┆Favorite movies",
                value: `${data.Movies.join(", ") || "Not set"}`,
                inline: true,
              },
              {
                name: "<a:_:1172380666856476712>┆Favorite actors",
                value: `${data.Actors.join(", ") || "Not set"}`,
                inline: true,
              },
              {
                name: "🏴┆Origin",
                value: `${data.Orgin || "Not set"}`,
                inline: true,
              },
              {
                name: "<a:_:1172383096356745246>┆Hobby's",
                value: `${data.Hobbys.join(", ") || "Not set"}`,
                inline: true,
              },
              {
                name: "😛┆Status",
                value: `${data.Status || "Not set"}`,
                inline: true,
              },
              {
                name: "<:_:1171218157042679838>┆Zprium Badges",
                value: `${
                  Badges.FLAGS
                    ? Badges.FLAGS.map((flag) => badgeFlags[flag]).join(" ")
                    : "None"
                }`,
                inline: true,
              },
              {
                name: "<a:_:1170097290531315752>┆Discord Badges",
                value: `${
                  userFlags.length
                    ? userFlags.map((flag) => flags[flag]).join(", ")
                    : "None" || "None"
                }`,
                inline: true,
              },
              {
                name: "<a:_:1172379128310284338>┆About me",
                value: `${data.Aboutme || "Not set"}`,
                inline: false,
              },
            ],
            type: "editreply",
          },
          interaction
        );
      } else {
        return client.errNormal(
          {
            error: "No profile found! Open a profile with /profile create",
            type: "ephemeral",
          },
          interaction
        );
      }
    });
  },
};
