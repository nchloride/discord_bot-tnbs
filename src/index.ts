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
import { IMessage } from "./resources/types";

//permissions
const tnbs = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

new SlashCommandBuilder().setName("testing").setDescription("Kita ko na");

tnbs
  .login(process.env.BOT_TOKEN)
  .catch((error: String) => console.log("Di ako makaconnnect gago!", error));

tnbs.on("ready", () => {
  console.log(`Logged in as ${tnbs.user.tag}!`);
});

tnbs.on("messageCreate", (message: IMessage) => {
  if (message.content === "test") {
    message.reply("Test message acknowledged!");
  }
  if (message.content.toLowerCase() === "chester") {
    message.reply("<:Shreky:743867384695357530>");
  }
});
