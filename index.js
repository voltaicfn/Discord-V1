const Discord = require('discord.js')
const fs = require('fs');
const client = new Discord.Client();
const prefix = '-';
const express = require('express');
const mongoose = require('mongoose');
const app = express()
const port = 3000

// ADD TOKEN BELOW!
//const DiscordToken = "token";

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
})

client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}
///////////////////////////////// CONSOLE LOG /////////////////////////////////
client.once("ready", () => {
  console.clear('');
  console.log('[Voltaic Bot] Bot online');


  client.user.setPresence({ activity: { type: "PLAYING", name: "Fortnite" }, status: "dnd" })
});

///////////////////////////////// CONSOLE LOG /////////////////////////////////

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  switch (command) {
    case "verify":
      client.commands.get('verify').execute(message, args);
      break;
    default:
      message.channel.send('that is not a command :sob:');
      break;
  }
});

client.login(DiscordToken);