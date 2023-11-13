module.exports = async (client, interaction, args) => {
  var result = Math.ceil(Math.random() * 100);

  client.embed(
    {
      title: `<a:_:1171160349257510984>・Gay rate`,
      desc: `You are ${result}% gay!`,
      type: "editreply",
    },
    interaction
  );
};
