//import message from "./justAnotherJSFile";

// // Test new Branch
// interface testObject {
//   author: String;
//   id: number;
//   testObject: {} | null;
// }

// let firstFunc = (testParam: testObject) => {
//   console.log(testParam);
// };

// let testObject1 = {
//   author: "testing",
//   id: 123,
//   testObject: { name: "4dobo" },
// };
// firstFunc(testObject1);

// import { Client, IntentString } from "discord.js";
// import { IntentOptions } from "./src/config/IntentOptions";

// async () => {
//   const BOT = new Client({ intents: IntentString });
//   await BOT.login(process.env.TOKEN);
// };

import dotenv from "dotenv";
dotenv.config("../");
import { Client, GatewayIntentBits, SlashCommandBuilder } from "discord.js";
import { messageHandler } from "./events/messageHandler";
import { IChannel } from "./resources/types";

const EXILED_MEMBER = "VISTA ROLE"

//permissions
const tnbs = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildPresences,
  ],
});

new SlashCommandBuilder().setName("testing").setDescription("Kita ko na");

tnbs
  .login(process.env.BOT_TOKEN)
  .catch((error: String) => console.log("Di ako makaconnnect gago!", error));

tnbs.on("ready", () => {
  console.log(`Logged in as ${tnbs.user.tag}!`);
});

tnbs.on("messageCreate", messageHandler);

export const getChannelByChannelId = (channelId: string) =>
  tnbs.channels.fetch(channelId).then((channel) => channel);

interface IMember{
  username:string
  id:string
}

let onlineMembers:IMember[] = [];

tnbs.on("presenceUpdate",  (oldPresence, newPresence) => {
  console.log(newPresence.member.roles.cache.map(role => role.name));
  let guildChannels = newPresence.guild.channels;
  const isWhitelisted = newPresence.member.roles.cache.map(role => role.name).every(role=> role!==EXILED_MEMBER)
  console.log(isWhitelisted);
  const isAlreadyOnline = onlineMembers.some(user => user.username === newPresence.user.username);
  if (isWhitelisted ) {
    // guildChannels.cache.find(channel=> channel.name === "testing").send("testing")
    
    
    if(newPresence.status === "online"){
      onlineMembers.push({username:newPresence.user.username,id:newPresence.user.id})
      console.log(onlineMembers.length);
    }
    else if(newPresence.status === "offline"){
      onlineMembers = onlineMembers.filter(member => member.id !== newPresence.user.id)
    }

    console.log(onlineMembers)

  }
});
