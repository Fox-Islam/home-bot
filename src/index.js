const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client({
    partials: ["MESSAGE", "REACTION"]
});

client.on("ready", () => {
    console.log("\nHome Bot is online.\n");
});

client.on("message", (message) => {
    if (message.author.id === process.env.CLIENT_ID) {
        return;
    }
    if (message.content.includes(`<@!${process.env.CLIENT_ID}>`)) {
        message.reply('Hey!');
    }
});

client.on("messageReactionAdd", async (messageReaction, user) => {
    //
});

client.on("messageReactionRemove", async (messageReaction, user) => {
    //
});

client.login(process.env.ACCESS_TOKEN);
