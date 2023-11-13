const { CommandInteraction, Client } = require("discord.js");
const { SlashCommandBuilder } = require("discord.js");
const Discord = require("discord.js");
const model = require("../../database/models/badge");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("message")
    .setDescription("Post preset messages")
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("Select a message")
        .setRequired(true)
        .addChoices(
          { name: "Information", value: "information" },
          { name: "Rules", value: "rules" },
          { name: "Applications", value: "applications" },
          { name: "Helpdesk", value: "helpdesk" },
          { name: "Network", value: "network" },
          { name: "Zprium-Info", value: "zpriuminfo" },
          { name: "Zprium-Badges", value: "badges" }
        )
    ),
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */

  run: async (client, interaction, args) => {
    await interaction.deferReply({ fetchReply: true });
    model.findOne({ User: interaction.user.id }, async (err, data) => {
      if (data && data.FLAGS.includes("DEVELOPER")) {
        const message = interaction.options.getString("message");

        client.succNormal(
          {
            text: `Message has been sent successfully!`,
            type: "ephemeraledit",
          },
          interaction
        );

        if (message == "information") {
          client
            .simpleEmbed(
              {
                image: `https://media.discordapp.net/attachments/937337957419999272/937338297036967946/techpoint_channel_banner_about.jpg?width=812&height=221`,
              },
              interaction.channel
            )
            .then(() => {
              client.embed(
                {
                  title: `<a:_:1169201314497040454>・Information`,
                  author: {
                    name: "VWC Support Server",
                    iconURL:
                      "https://cdn.discordapp.com/attachments/1163849504643088416/1173180124338868235/VWC-Support.jpg?ex=65630422&is=65508f22&hm=12d7ec47f6014d69520adb29bd21bb7f020e8e530c1402e762718eb73ecd594d&",
                  },
                  thumbnail:
                    "https://media.discordapp.net/attachments/937337957419999272/937463192265846784/techpoint_logo_Bot.jpg?width=812&height=812",
                  fields: [
                    {
                      name: `<a:_:1170116549487628380>┆Welcome to Vilorux Wacrux Support Server!`,
                      value: `Welcome to Vilorux Wacrux Support server! We are focused on helping you as soon as possible in special problems like a ban or something like that, as long as it is something justifiable.`,
                    },
                    {
                      name: `<a:_:1170105530728075314>┆What can I do here?`,
                      value: `- You can appeal for any problem inside or outside the server\n- Report technical problems of the server\n- Report technical problems about Zprium\n- Ask what you think is very strange or important to communicate`,
                    },
                    {
                      name: `<:_:1171218157042679838>┆What is Zprium?`,
                      value:
                        "You can find this information in the <#1173189710722637904> channel or you can use the ```/zprium info``` command.",
                    },
                    {
                      name: `<:_:1170104007977619586>┆Invite friends to connect with other people`,
                      value: `You can invite your friends with this link: https://discord.gg/NppaPym343`,
                    },
                  ],
                  footer: {
                    text: `© VWC Support Server - 2022`,
                    iconURL:
                      "https://cdn.discordapp.com/attachments/1163849504643088416/1173180124338868235/VWC-Support.jpg?ex=65630422&is=65508f22&hm=12d7ec47f6014d69520adb29bd21bb7f020e8e530c1402e762718eb73ecd594d&",
                  },
                },
                interaction.channel
              );
            });
        }

        if (message == "rules") {
          client
            .simpleEmbed(
              {
                image: `https://media.discordapp.net/attachments/937337957419999272/937338297968123904/techpoint_channel_banner_rules.jpg?width=812&height=221`,
              },
              interaction.channel
            )
            .then(() => {
              client.embed(
                {
                  title: `<a:_:1170404128715964416>・Rules`,
                  author: {
                    name: "VWC Support Server",
                    iconURL:
                      "https://cdn.discordapp.com/attachments/1163849504643088416/1173180124338868235/VWC-Support.jpg?ex=65630422&is=65508f22&hm=12d7ec47f6014d69520adb29bd21bb7f020e8e530c1402e762718eb73ecd594d&",
                  },
                  thumbnail:
                    "https://media.discordapp.net/attachments/937337957419999272/937463192265846784/techpoint_logo_Bot.jpg?width=812&height=812",
                  desc: `These are our server rules. Please stick to this to keep it fun for everyone. The Admins and Mods will Timeout/Kick/Ban per discretion`,
                  fields: [
                    {
                      name: `1. Be respectful`,
                      value: `You must respect all users, regardless of your liking towards them. Treat others the way you want to be treated.`,
                    },
                    {
                      name: `2. No Inappropriate Language`,
                      value: `The use of profanity should be kept to a minimum. However, any derogatory language towards any user is prohibited.`,
                    },
                    {
                      name: `3. No spamming`,
                      value: `Don't send a lot of small messages right after each other. Do not disrupt chat by spamming.`,
                    },
                    {
                      name: `4. No pornographic/adult/other NSFW material`,
                      value: `This is a community server and not meant to share this kind of material.`,
                    },
                    {
                      name: `5. No advertisements`,
                      value: `We do not tolerate any kind of advertisements, whether it be for other communities or streams. You can post your content in the media channel if it is relevant and provides actual value (Video/Art)`,
                    },
                    {
                      name: `6. No offensive names and profile pictures`,
                      value: `You will be asked to change your name or picture if the staff deems them inappropriate.`,
                    },
                    {
                      name: `7. Server Raiding`,
                      value: `Raiding or mentions of raiding are not allowed.`,
                    },
                    {
                      name: `8. Direct & Indirect Threats`,
                      value: `Threats to other users of DDoS, Death, DoX, abuse, and other malicious threats are absolutely prohibited and disallowed.`,
                    },
                    {
                      name: `9. Follow the Discord Community Guidelines`,
                      value: `You can find them here: https://discordapp.com/guidelines`,
                    },
                    {
                      name: `10. Do not join voice chat channels without permissions of the people already in there`,
                      value: `If you see that they have a free spot it is alright to join and ask whether they have an open spot, but leave if your presence is not wanted by whoever was there first`,
                    },
                  ],
                  footer: {
                    text: `© VWC Support Server - 2022`,
                    iconURL:
                      "https://cdn.discordapp.com/attachments/1163849504643088416/1173180124338868235/VWC-Support.jpg?ex=65630422&is=65508f22&hm=12d7ec47f6014d69520adb29bd21bb7f020e8e530c1402e762718eb73ecd594d&",
                  },
                },
                interaction.channel
              );
            });
        }

        if (message == "applications") {
          client
            .simpleEmbed(
              {
                image: `https://media.discordapp.net/attachments/937337957419999272/938725909068918854/techpoint_channel_banner_applications.jpg?width=812&height=221`,
              },
              interaction.channel
            )
            .then(() => {
              client.embed(
                {
                  title: `<:_:1170416760734887946>・Applications`,
                  author: {
                    name: "VWC Support Server",
                    iconURL:
                      "https://cdn.discordapp.com/attachments/1163849504643088416/1173180124338868235/VWC-Support.jpg?ex=65630422&is=65508f22&hm=12d7ec47f6014d69520adb29bd21bb7f020e8e530c1402e762718eb73ecd594d&",
                  },
                  thumbnail:
                    "https://media.discordapp.net/attachments/937337957419999272/937463192265846784/techpoint_logo_Bot.jpg?width=812&height=812",
                  desc: `What could be more fun than working at the best Club? We regularly have spots for new positions that you can apply for \n\nBut... what can you expect?`,
                  fields: [
                    {
                      name: `<a:_:1170417495233007736>┆A very nice team`,
                      value: `In the Vilorux Wacrux Club team there is always a pleasant atmosphere and everyone is treated equally!`,
                    },
                    {
                      name: `<a:_:1170419751240093726>┆A nice rank and badge`,
                      value: `You will get a nice rank in the Club and a team badge in our **userinfo** command. Everyone can see that you contribute to the team`,
                    },
                    {
                      name: `<:_:1170420512300744826>┆Learn and grow`,
                      value: `We understand that you don't always understand everything right away! At Vilorux Wacrux Club, we give you the opportunity to learn new things and get better at the position. You can also grow into the management team in the future!`,
                    },
                    {
                      name: `<a:_:1170105530728075314>┆What does everything mean?`,
                      value: `**Moderator** \nYou keep yourself busy with the Club that everything is and remains fun for everyone! Chat with us and keep the overview \n\n**Network Marketing** \nWe also want to grow and we do that with a great network marketing team! You know better than anyone how to make a Club grow well \n\n**Organization** \nYou will ensure an even nicer atmosphere in the Club! Together with a team you work on new and fun events to make the Club even more fun!`,
                    },
                    {
                      name: `<:_:1170424895579115713>┆Apply?`,
                      value: `Create a ticket to receive your application!`,
                    },
                  ],
                  footer: {
                    text: `© VWC Support Server - 2022`,
                    iconURL:
                      "https://cdn.discordapp.com/attachments/1163849504643088416/1173180124338868235/VWC-Support.jpg?ex=65630422&is=65508f22&hm=12d7ec47f6014d69520adb29bd21bb7f020e8e530c1402e762718eb73ecd594d&",
                  },
                },
                interaction.channel
              );
            });
        }

        if (message == "badges") {
          client.simpleEmbed(
            {
              image: `https://media.discordapp.net/attachments/937337957419999272/938725908028751882/techpoint_channel_banner_soon.jpg?width=813&height=221`,
            },
            interaction.channel
          );
          // .then(() => {
          //     client.embed({
          //         title: `🥇・Badges`,
          //         thumbnail: "https://media.discordapp.net/attachments/937337957419999272/938725906728513576/techpoint_channel_banner_badges.jpg?width=813&height=221",
          //         desc: `We at Bot have a special badge system! You can find your badge via the userinfo command. Read below what each badge means`,
          //         fields: [
          //             {
          //                 name: `${client.emotes.badges.bot}┆Bot badge`,
          //                 value: `This badge is only available for the Bot(s). This way you can see even better that they belong together.`,
          //             },
          //             {
          //                 name: `${client.emotes.badges.developer}┆Developer badge`,
          //                 value: `This badge is only available to Bot developers. This shows that they are official developers of the bots.`,
          //             },
          //             {
          //                 name: `${client.emotes.badges.management}┆Management badge`,
          //                 value: `You can get this badge if you are an official management member of team Bot.`,
          //             },
          //             {
          //                 name: `${client.emotes.badges.team}┆Team badge`,
          //                 value: `You can get this badge if you are an official team member of team Bot.`,
          //             },
          //             {
          //                 name: `${client.emotes.badges.support}┆Support badge`,
          //                 value: `You can get this badge if you are an official support member of team Bot.`,
          //             },
          //             {
          //                 name: `${client.emotes.badges.moderator}┆Moderator badge`,
          //                 value: `You can get this badge if you are an official moderator of team Bot.`,
          //             },
          //             {
          //                 name: `${client.emotes.badges.marketing}┆Marketing badge`,
          //                 value: `You can get this badge if you are an official marketing member of team Bot.`,
          //             },
          //             {
          //                 name: `${client.emotes.badges.event}┆Organization badge`,
          //                 value: `You can get this badge if you are an official organization member of team Bot.`,
          //             },
          //             {
          //                 name: `${client.emotes.badges.designer}┆Designer badge`,
          //                 value: `You can get this badge if you are an official designer of team Bot.`,
          //             },
          //             {
          //                 name: `${client.emotes.badges.booster}┆Booster badge`,
          //                 value: `You can get this badge if you have boosted a server within our network.`,
          //             },
          //             {
          //                 name: `${client.emotes.badges.partner}┆Partner badge`,
          //                 value: `You can get this badge if you are official partnerd with our server.`,
          //             },
          //             {
          //                 name: `${client.emotes.badges.bug}┆Bug Hunter badge`,
          //                 value: `You can get this badge if you have reported more than 5 bugs in our bot.`,
          //             },
          //             {
          //                 name: `${client.emotes.badges.supporter}┆Supporter badge`,
          //                 value: `You can get this badge if you have given something to Bot to improve the bot even more.`,
          //             },
          //             {
          //                 name: `${client.emotes.badges.vip}┆Vip badge`,
          //                 value: `You can get this badge if you have bought the vip role in the economy system.`,
          //             },
          //             {
          //                 name: `${client.emotes.badges.active}┆Active badge`,
          //                 value: `You can get this badge if you have bought the active role in the economy system.`,
          //             }
          //         ],
          //         footer: {
          //             text: `© VWC Support Server - 2022`,
          //             iconURL: "https://cdn.discordapp.com/attachments/1163849504643088416/1173180124338868235/VWC-Support.jpg?ex=65630422&is=65508f22&hm=12d7ec47f6014d69520adb29bd21bb7f020e8e530c1402e762718eb73ecd594d&"
          //         }
          //     }, interaction.channel)
          // })
        }
      } else {
        return client.errNormal(
          {
            text: "Only Zprium developers are allowed to do this",
            editreply: true,
          },
          interaction
        );
      }
    });
  },
};
