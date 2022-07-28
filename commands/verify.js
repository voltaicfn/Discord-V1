module.exports = {
    name: 'verify',
    description: "Verifies user",
    execute(message, args) {
      const ms = require('ms');
      const timeSpan = ms('5 days');
      const createdAt = message.author.createdAt.getTime();
      const difference = Date.now() - createdAt;
  
      if (difference < timeSpan) {
        message.channel.send('you are a alt account!');
        message.channel.send('<@881314811378556960> ' + 'mute ' + '<@' + message.author + '>');
        return;
      } else {
        let user = message.guild.member(message.author)
        const role = "999379632564482108";
        user.roles.add(role);
        message.channel.send(message.author.username + ", " + "Welcome!");
      }
    }
  }