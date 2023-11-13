const Discord = require("discord.js");

module.exports = async (client, interaction, args) => {
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
          image: `https://cdn.discordapp.com/attachments/843487478881976381/874742689017520128/Bot_banner_information.jpg`,
        },
        interaction.channel
      )
      .then(() => {
        client.embed(
          {
            title: `<a:_:1169201314497040454>・Information`,
            thumbnail: client.user.avatarURL({ size: 1024 }),
            desc: `_____`,
            fields: [
              {
                name: `<a:_:1170116549487628380>┆Welcome to ${interaction.guild.name}!`,
                value: `Welcome to our hangout place! Meet new people here, play some games and participate in seasonal events! We are a Club where we bring everyone together and we try to make it comfortable for everyone! Please be welcome and have some fun!`,
              },
              {
                name: `<a:_:1170105530728075314>┆What can I do here?`,
                value: `- Meet new people! \n- Play many fun games! \n- Discover the seasons! \n- Participate in events! \nAnd…. Last but not least, choose your own roles at <#1163849552659497010>!`,
              },
              {
                name: `<a:_:1170117054586687488>┆How do I get help when needed?`,
                value: `You can make a ticket in <#1163849619512508452>! We are happy to help you with your questions here and offer support in the Club!`,
              },
              {
                name: `<a:_:1170117324884426873>┆I want to help Vilorux Wacrux Club to improve!`,
                value: `- Go to <#1163849515409870949> and see if you qualify! \n- Or make a ticket and ask if you can help with certain things! \n\n**We wish you a very nice and happy time here!**`,
              },
            ],
          },
          interaction.channel
        );
      });
  }

  if (message == "rules") {
    client
      .simpleEmbed(
        {
          image: `https://cdn.discordapp.com/attachments/843487478881976381/874742702393131038/Bot_banner_rules.jpg`,
        },
        interaction.channel
      )
      .then(async () => {
        await client.embed(
          {
            title: `<a:_:1170404128715964416>・Rules`,
            thumbnail: client.user.avatarURL({ size: 1024 }),
            desc: `_____ \n\nThese are our Club rules. Please stick to this to keep it fun for everyone. The Admins and Mods will Timeout/Kick/Ban per discretion`,
          },
          interaction.channel
        );

        await client.embed(
          {
            title: `1. Be respectful`,
            desc: `You must respect all users, regardless of your liking towards them. Treat others the way you want to be treated.`,
          },
          interaction.channel
        );

        await client.embed(
          {
            title: `2. No Inappropriate Language`,
            desc: `The use of profanity should be kept to a minimum. However, any derogatory language towards any user is prohibited.`,
          },
          interaction.channel
        );

        await client.embed(
          {
            title: `3. No spamming`,
            desc: `Don't send a lot of small messages right after each other. Do not disrupt chat by spamming.`,
          },
          interaction.channel
        );

        await client.embed(
          {
            title: `4. No pornographic/adult/other NSFW material`,
            desc: `This is a community Club and not meant to share this kind of material.`,
          },
          interaction.channel
        );

        await client.embed(
          {
            title: `5. No advertisements`,
            desc: `We do not tolerate any kind of advertisements, whether it be for other communities or streams. You can post your content in the media channel if it is relevant and provides actual value (Video/Art)`,
          },
          interaction.channel
        );

        await client.embed(
          {
            title: `6. No offensive names and profile pictures`,
            desc: `You will be asked to change your name or picture if the staff deems them inappropriate.`,
          },
          interaction.channel
        );

        await client.embed(
          {
            title: `7. Server Raiding`,
            desc: `Raiding or mentions of raiding are not allowed.`,
          },
          interaction.channel
        );

        await client.embed(
          {
            title: `8. Direct & Indirect Threats`,
            desc: `Threats to other users of DDoS, Death, DoX, abuse, and other malicious threats are absolutely prohibited and disallowed.`,
          },
          interaction.channel
        );

        await client.embed(
          {
            title: `9. Follow the Discord Community Guidelines`,
            desc: `You can find them here: https://discordapp.com/guidelines`,
          },
          interaction.channel
        );

        await client.embed(
          {
            title: `10. Do not join voice chat channels without permissions of the people already in there`,
            desc: `If you see that they have a free spot it is alright to join and ask whether they have an open spot, but leave if your presence is not wanted by whoever was there first`,
          },
          interaction.channel
        );
      });
  }

  if (message == "applications") {
    client
      .simpleEmbed(
        {
          image: `https://cdn.discordapp.com/attachments/843487478881976381/874742737415581786/Bot_banner_applications.jpg`,
        },
        interaction.channel
      )
      .then(() => {
        client.embed(
          {
            title: `<:_:1170416760734887946>・Applications`,
            thumbnail: client.user.avatarURL({ size: 1024 }),
            desc: `_____ \n\nWhat could be more fun than working at the best Club? We regularly have spots for new positions that you can apply for \n\nBut... what can you expect?`,
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
          },
          interaction.channel
        );
      });
  }

  if (message == "boosterperks") {
    client
      .simpleEmbed(
        {
          image: `https://media.discordapp.net/attachments/843487478881976381/881396544195149874/Bot_banner_boosters.jpg`,
        },
        interaction.channel
      )
      .then(() => {
        client.embed(
          {
            title: `<a:_:1170452154159464600>・Booster Perks`,
            thumbnail: client.user.avatarURL({ size: 1024 }),
            desc: `_____ \n\nMore options in the Club? Become a real VIP Booster and get nice benefits for a nice experience. But what do you actually get?`,
            fields: [
              {
                name: `<a:_:1170467286008737933>┆Use external stickers`,
                value: `Use stickers from other servers in our Club`,
              },
              {
                name: `<:_:1170466852980404255>┆Send TTS messages`,
                value: `Send messages that have a sound attached`,
              },
              {
                name: `<:_:1170466324758155375>┆Access to the hidden VIP lounge`,
                value: `Get access to a private VIP lounge and chat with other boosters!`,
              },
              {
                name: `📛┆Change your nickname`,
                value: `Change your name in the Club. This is how you stand out in the Club`,
              },
              {
                name: `<:_:1170455516204507226>┆Create public/private threads`,
                value: `Create a thread in our text channels`,
              },
              {
                name: `<a:_:1170454947872116806>┆Private giveaways`,
                value: `Get access to fun exclusive giveaways`,
              },
              {
                name: `<:_:1170454566614089858>┆Send files in any channel`,
                value: `Send files in all channels where you can talk`,
              },
              {
                name: `<:_:1170453283542933625>┆Get access to a special promotional channel`,
                value: `Get the opportunity to promote your own server in a special channel`,
              },
              {
                name: `<:_:1170452950443884614>┆Custom role of your choice`,
                value: `Create your own role that you can set yourself`,
              },
              {
                name: `<a:_:1170452564635045908>┆Get the booster role + badge`,
                value: `Stand out with a nice booster role and a booster badge!`,
              },
            ],
          },
          interaction.channel
        );
      });
  }

  if (message == "links") {
    client
      .simpleEmbed(
        {
          image: `https://media.discordapp.net/attachments/843487478881976381/881396544195149874/Bot_banner_boosters.jpg`,
        },
        interaction.channel
      )
      .then(() => {
        client.embed(
          {
            title: `<:_:1170104007977619586>・Links`,
            thumbnail: client.user.avatarURL({ size: 1024 }),
            desc: `_____ \n\nSee all the links from Zprium!`,
            fields: [
              {
                name: `▬▬│Servers│▬▬`,
                value: ``,
              },
            ],
          },
          interaction.channel
        );
      });
  }

  if (message == "rewards") {
    client.embed(
      {
        title: `😜・Role Rewards`,
        thumbnail: client.user.avatarURL({ size: 1024 }),
        desc: `_____ \n\nDo you want some extras in the Club? Or do you want to stand out more in the Club? Look below for the rewards`,
        fields: [
          {
            name: `🏆┆Levels`,
            value: `- Level 5   | <@&1163848874432151622>\n- Level 10  | <@&1163848871147999354>\n- Level 15  | <@&1163848869080211456>\n- Level 20 | <@&1163848866651705434>\n- Level 25 | <@&1163848863950589952>\n- Level 30 | <@&1163848859911458849>\n- Level 35 | <@&1163848856954491001>\n- Level 40 | <@&1163848854505013259>\n- Level 45 | <@&1163848850881122435>\n- Level 50 | <@&1163848847320166401>\n- Level 55 | <@&1163848844157665310>\n- Level 60 | <@&1163848840860926094>\n- Level 65 | <@&1163848838285631508>\n- Level 70 | <@&1163848835416735795>\n- Level 75 | <@&1163848832606548108>\n- Level 80 | <@&1163848828429029439>\n- Level 85 | <@&1163848825765642241>\n- Level 90 | <@&1163848822330495047>\n- Level 95 | <@&1163848819608391762>\n- Level 100 | <@&1163848816437514330>`,
          },
          {
            name: `🥳┆Special`,
            value: `- 1 Club bump | <@&1163849036768481311>\n- 1 boost | <@&1163848806627033119>\n- 1 donate | <@&1163848790046933043>`,
          },
        ],
      },
      interaction.channel
    );
  }
};
