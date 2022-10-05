import * as dotenv from "dotenv"
dotenv.config("../")
import { Client,GatewayIntentBits  } from "discord.js";

                                    //permissions
const tnbs = new Client({intents : [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent]});

tnbs.login(process.env.BOT_TOKEN)

tnbs.on("messageCreate", (message)=>{
    console.log(message.content);
    if(message.content === "test"){
        message.reply("Test message acknowledged!")
    }
    if(message.content.toLowerCase() === "chester"){
        message.reply("gago")
    }
})

tnbs.on("ready", ()=>{
    console.log(`Logged in as ${tnbs.user.tag}!`);
})