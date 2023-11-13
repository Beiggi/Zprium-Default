const Discord = require("discord.js");

module.exports = async (client, interaction, args) => {
  const option = interaction.options.getString("option");

  let options = ["rock", "paper", "scissors"];
  const result = options[Math.floor(Math.random() * options.length)];

  switch (option) {
    case "rock":
      if (result == "paper")
        return client.embed(
          {
            title: `<a:_:1171234143133245501>・Rock paper scissors`,
            desc: `I have ${result}, I win!`,
            type: "editreply",
          },
          interaction
        );

      if (result == "scissors")
        return client.embed(
          {
            title: `<a:_:1171234143133245501>・Rock paper scissors`,
            desc: `I have ${result}, You win!`,
            type: "editreply",
          },
          interaction
        );

      if (result == "rock")
        return client.embed(
          {
            title: `<a:_:1171234143133245501>・Rock paper scissors`,
            desc: `I have ${result}, It's a draw!`,
            type: "editreply",
          },
          interaction
        );
      break;

    case "paper":
      if (result == "paper")
        return client.embed(
          {
            title: `<a:_:1171234143133245501>・Rock paper scissors`,
            desc: `I have ${result}, It's a draw!`,
            type: "editreply",
          },
          interaction
        );

      if (result == "scissors")
        return client.embed(
          {
            title: `<a:_:1171234143133245501>・Rock paper scissors`,
            desc: `I have ${result}, I win!`,
            type: "editreply",
          },
          interaction
        );

      if (result == "rock")
        return client.embed(
          {
            title: `<a:_:1171234143133245501>・Rock paper scissors`,
            desc: `I have ${result}, You win!`,
            type: "editreply",
          },
          interaction
        );
      break;

    case "scissors":
      if (result == "paper")
        return client.embed(
          {
            title: `<a:_:1171234143133245501>・Rock paper scissors`,
            desc: `I have ${result}, You win!`,
            type: "editreply",
          },
          interaction
        );

      if (result == "scissors")
        return client.embed(
          {
            title: `<a:_:1171234143133245501>・Rock paper scissors`,
            desc: `I have ${result}, It's a draw!`,
            type: "editreply",
          },
          interaction
        );

      if (result == "rock")
        return client.embed(
          {
            title: `<a:_:1171234143133245501>・Rock paper scissors`,
            desc: `I have ${result}, I win!`,
            type: "editreply",
          },
          interaction
        );
      break;
  }
};
