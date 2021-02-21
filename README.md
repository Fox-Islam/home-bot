# Home Bot
Simple bot for our home server

# Getting started
## Setting up a test Discord Bot
* Create a new Discord server to run your test bot in
* Create a new [Discord app](https://discord.com/developers/applications/) in the Developer Portal. On the top right, click `New Application` and give it a name
* Select `Bot` in the left-hand menu and click `Add Bot` and create a new bot
* In the project directory on your local machine, create a copy of the `.env.sample` file and rename the copy to `.env`
  * From the `Bot` settings on the [Discord Developer Portal](https://discord.com/developers/applications/) website, copy your bot's `Token`. Set the `ACCESS_TOKEN` variable in your `.env` file to the bot's `Token`
  * From the `General Information` settings in your [Discord application](https://discord.com/developers/applications/), copy the application's `Client Id` and set the `CLIENT_ID` variable in your .env to this value
  * Set `BOT_ACTIVE_CHANNEL` to the ID of channel you want the bot to be active in within your Discord server. To get the id, right click on the channel and click `Copy ID`
  * Set `SERVER_ID` to the ID of the server. To find it, right click on the server then click `Copy ID`

## Bringing the bot online
From the project folder run this command in your terminal to pull the dependencies:
```
npm install
```
and then run
```
npm start
```
to start the bot in a local node server

Alternatively, in VS Code press F5 to run the bot server in debug mode
