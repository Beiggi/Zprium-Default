module.exports = async (client, interaction, args) => {
  var result = Math.ceil(Math.random() * 100);

  client.embed(
    {
      title: `<a:_:1171160349257510984>・Epic gamer rate`,
      desc: `You are ${result}% epic gamer!`,
      type: "editreply",
    },
    interaction
  );
};
