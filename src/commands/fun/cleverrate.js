module.exports = async (client, interaction, args) => {
  var result = Math.ceil(Math.random() * 100);

  client.embed(
    {
      title: `<a:_:1171160349257510984>・Clever Rate`,
      desc: `You are ${result}% clever!`,
      type: "editreply",
    },
    interaction
  );
};
