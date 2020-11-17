# bot  

A good, open source, discord bot made in discord.js and using mongoDB.

# Can't selfhost?

We'll be running a fully fledged version of the bot sometime soon, maybe when there's a decent amount of code that works.

## Setup

### Config File

You can setup a config file by doing the following:

While a lavalink node is not required, the music commands will not work without it though.

#### Obtaining a bot token

By going [here](https://discord.com/developers/applications) and making a bot application. You need to copy the token into the token string.

#### Obtaining a mongoDB connection URI  

By going [here](https://www.mongodb.com/cloud/atlas) and logging in, making a cluster, getting the connection URI and copying it in, with credentials, of course.

#### Status

The status should be either  

- dnd for Do Not Disturb  
- online for Online  
- idle for Idle  
This is case sensitive.

#### Lavalink Node details

You can get a Lavalink node to host [here](https://ci.fredboat.com/viewLog.html?buildId=lastSuccessful&buildTypeId=Lavalink_Build&tab=artifacts&guest=1#%2FLavalink.jar). You only need the Lavalink.jar and an application.yml, an example of such can be found [here](https://github.com/good-discord-bot/lavalink/blob/main/application.yml).
