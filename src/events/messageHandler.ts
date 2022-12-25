import { Message, User } from "discord.js";
import { getChannelByChannelId } from "..";
import { IChannel, IMessage, IUser } from "../resources/types";
const {joinVoiceChannel}  = require("@discordjs/voice")


export const messageHandler = async (message: Message ) => {
  const content: string = message.content.trim();
  const individualWords = content.split(" ").filter((word) => word != "");
  const messageAuthor = message.author;
  const channel: | any = await getChannelByChannelId(message.channelId);
  
  if (messageAuthor.bot && channel.name !== "music" || channel.name !== "testing" ) {
    // message.delete();
    return
  }

  if (content === "test") {
    message.reply("Test message acknowledged!");
  }
  if (content.toLowerCase() === "chester") {
    message.reply("<:Shreky:743867384695357530>");
  }

  const userMentions: User[] = message.mentions.users.map((x) => x);
  if (userMentions.length !== 0) {
    userMentions.forEach((user) => {
      if (user.username === "TNBS") {
        message.reply("Bat mo ko tinatawag?");
      }
    });
  }
  // console.log(message);
  if (
    channel.name === "testing" &&
    !messageAuthor.bot &&
    !(
      message.author.username === "lass_23" ||
      message.author.username === "ChLoride"
    )
  ) {
    message.reply(
      "Wag kang makulet " +
        messageAuthor.username +
        " dun kayo mag chat sa ibang channel!"
    );
  }
 
  const hasPlayCommand:boolean = content.split(" ")[0] === "$play";
  const channelState = message.member.voice.channel
  console.log(channelState, hasPlayCommand);
  if(hasPlayCommand && channelState){

    message.reply("test1")
  }
  else{
    message.reply("please join a voice channel")
  }





};
