const Discord = require("discord.js");

module.exports = async (client) => {
  const fields = [
    {
      name: `<a:_:1172847681245294644>┆Activities`,
      value: `\`/activities\``,
      inline: true,
    },
    {
      name: `<a:_:1171877296836186153>┆AFK`,
      value: `\`/afk help\``,
      inline: true,
    },
    {
      name: `<a:_:1169206241772437614>┆Announcement`,
      value: `\`/announcement help\``,
      inline: true,
    },
    {
      name: `<:_:1172876437561290792>┆Auto mod`,
      value: `\`/automod help\``,
      inline: true,
    },
    {
      name: `<a:_:1170805200869654610>┆Auto setup`,
      value: `\`/autosetup help\``,
      inline: true,
    },
    {
      name: `<a:_:1169381093586260092>┆Birthday`,
      value: `\`/birthdays help\``,
      inline: true,
    },
    {
      name: `<:_:1171218157042679838>┆Zprium`,
      value: `\`/zprium help\``,
      inline: true,
    },
    {
      name: `<a:_:1170111424937349130>┆Casino`,
      value: `\`/casino help\``,
      inline: true,
    },
    {
      name: `<:_:1172812613026058270>┆Configuration`,
      value: `\`/config help\``,
      inline: true,
    },
    {
      name: `<a:_:1172877746939105410>┆Custom commands`,
      value: `\`/custom-commands help\``,
      inline: true,
    },
    {
      name: `<a:_:1171022078552580187>┆Economy`,
      value: `\`/economy help\``,
      inline: true,
    },
    {
      name: `<:_:1171126950350295110>┆Family`,
      value: `\`/family help\``,
      inline: true,
    },
    {
      name: `<a:_:1172880089512411137>┆Fun`,
      value: `\`/fun help\``,
      inline: true,
    },
    {
      name: `<a:_:1172880658427826256>┆Games`,
      value: `\`/games help\``,
      inline: true,
    },
    {
      name: `<a:_:1170454947872116806>┆Giveaway`,
      value: `\`/giveaway help\``,
      inline: true,
    },
    {
      name: `<:_:1171218160435875981>┆Club settings`,
      value: `\`/guild help\``,
      inline: true,
    },
    {
      name: `🖼️┆Images`,
      value: `\`/images help\``,
      inline: true,
    },
    {
      name: `<a:_:1170106925044740287>┆Invites`,
      value: `\`/invites help\``,
      inline: true,
    },
    {
      name: `<a:_:1172271518370254938>┆Leveling`,
      value: `\`/levels help\``,
      inline: true,
    },
    {
      name: `<:_:1171916318610563102>┆Messages`,
      value: `\`/messages help\``,
      inline: true,
    },
    {
      name: `<:_:1172882729638035486>┆Moderation`,
      value: `\`/moderation help\``,
      inline: true,
    },
    {
      name: `<a:_:1171872871665119232>┆Music`,
      value: `\`/music help\``,
      inline: true,
    },
    {
      name: `<a:_:1171924485520248864>┆Notepad`,
      value: `\`/notepad help\``,
      inline: true,
    },
    {
      name: `<:_:1170778648870125721>┆Profile`,
      value: `\`/profile help\``,
      inline: true,
    },
    {
      name: `<:_:1172395170726162472>┆Radio`,
      value: `\`/radio help\``,
      inline: true,
    },
    {
      name: `😛┆Reaction roles`,
      value: `\`/reactionroles help\``,
      inline: true,
    },
    {
      name: `<:_:1172286293661720706>┆Search`,
      value: `\`/search help\``,
      inline: true,
    },
    {
      name: `📊┆Club stats`,
      value: `\`/clubstats help\``,
      inline: true,
    },
    {
      name: `<:_:1172812613026058270>┆Setup`,
      value: `\`/setup help\``,
      inline: true,
    },
    {
      name: `<a:_:1169204360803266570>┆Soundboard`,
      value: `\`/soundboard help\``,
      inline: true,
    },
    {
      name: `<a:_:1172581280802676837>┆Sticky messages`,
      value: `\`/stickymessages help\``,
      inline: true,
    },
    {
      name: `💡┆Suggestions`,
      value: `\`/sugestions help\``,
      inline: true,
    },
    {
      name: `<a:_:1172582863120650270>┆Thanks`,
      value: `\`/thanks help\``,
      inline: true,
    },
    {
      name: `<a:_:1170117054586687488>┆Tickets`,
      value: `\`/tickets help\``,
      inline: true,
    },
    {
      name: `<a:_:1170096318392324196>┆Tools`,
      value: `\`/tools help\``,
      inline: true,
    },
    {
      name: `<a:_:1171929475588567132>┆Voice`,
      value: `\`/voice help\``,
      inline: true,
    },
  ];

  client
    .on(Discord.Events.InteractionCreate, async (interaction) => {
      if (!interaction.isStringSelectMenu()) return;

      if (interaction.customId == "Zprium-helppanel") {
        if (interaction.values == "commands-Zpriumhelp") {
          interaction.deferUpdate();
          let page = 1;

          const row = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
              .setCustomId("helpPrev")
              .setEmoji("⬅️")
              .setStyle(Discord.ButtonStyle.Secondary),

            new Discord.ButtonBuilder()
              .setCustomId("helpNext")
              .setEmoji("➡️")
              .setStyle(Discord.ButtonStyle.Secondary),

            new Discord.ButtonBuilder()
              .setLabel("Invite your friends")
              .setURL(client.config.discord.botInvite)
              .setStyle(Discord.ButtonStyle.Link),

            new Discord.ButtonBuilder()
              .setLabel("Support server")
              .setURL(client.config.discord.serverInvite)
              .setStyle(Discord.ButtonStyle.Link)
          );

          const row2 = new Discord.ActionRowBuilder().addComponents(
            new Discord.StringSelectMenuBuilder()
              .setCustomId("Zprium-helppanel")
              .setPlaceholder("❌┆Nothing selected")
              .addOptions([
                {
                  label: `Commands`,
                  description: `Show the commands of Zprium!`,
                  emoji: "💻",
                  value: "commands-Zpriumhelp",
                },
                {
                  label: `Invite your friends`,
                  description: `Invite your friends to the Club`,
                  emoji: "📨",
                  value: "invite-Zpriumhelp",
                },
                {
                  label: `Support server`,
                  description: `Join the support server`,
                  emoji: "❓",
                  value: "support-Zpriumhelp",
                },
                {
                  label: `Changelogs`,
                  description: `Show the Zprium changelogs`,
                  emoji: "📃",
                  value: "changelogs-Zpriumhelp",
                },
              ])
          );

          client
            .embed(
              {
                title: `<a:_:1170105530728075314>・Help panel`,
                desc: `View all Zprium command categories with /help! \n\n[Invite friends](${client.config.discord.botInvite})`,
                image:
                  "https://cdn.discordapp.com/attachments/843487478881976381/874694194474668052/Bot_banner_invite.jpg",
                fields: fields.slice(0, 24),
                components: [row2, row],
                type: "edit",
              },
              interaction.message
            )
            .then((msg) => {
              const filter = (i) => i.user.id === interaction.user.id;

              const collector =
                interaction.channel.createMessageComponentCollector({
                  filter,
                  time: 100000,
                });

              collector.on("collect", async (i) => {
                if (i.customId == "helpNext") {
                  if (page == 1) {
                    client.embed(
                      {
                        title: `<a:_:1170105530728075314>・Help panel`,
                        desc: `View all Zprium command categories with /help! \n\n[Invite friends](${client.config.discord.botInvite})`,
                        fields: fields.slice(25, 49),
                        components: [row2, row],
                        type: "update",
                      },
                      i
                    );
                    page += 1;
                  }
                } else if (i.customId == "helpPrev") {
                  if (page == 2) {
                    client.embed(
                      {
                        title: `<a:_:1170105530728075314>・Help panel`,
                        desc: `View all Zprium command categories with /help! \n\n[Invite friends](${client.config.discord.botInvite})`,
                        fields: fields.slice(0, 24),
                        components: [row2, row],
                        type: "update",
                      },
                      i
                    );
                    page -= 1;
                  }
                }
              });
            });
        }
      }
    })
    .setMaxListeners(0);
};
