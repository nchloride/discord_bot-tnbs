import { Message, User } from "discord.js";
import { getChannelByChannelId } from "..";
import { IChannel, IMessage, IUser } from "../resources/types";
const { joinVoiceChannel } = require('@discordjs/voice');

let connection;

export const messageHandler = async (message: Message ) => {
  const content: string = message.content.trim();
  const individualWords = content.split(" ").filter((word) => word != "");
  const messageAuthor = message.author;
  const channel: | any = await getChannelByChannelId(message.channelId);
  
  console.log(channel.name);
  if (channel.name === "music" || channel.name === "testing") 
  {
    if (messageAuthor.bot ) {
      // message.delete();c
  
      console.log("deleeted");
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
    // console.log(channelState, hasPlayCommand);
    if(hasPlayCommand && channelState){
      console.log(message.member.voice.channel.id,channel.guild.id);
      connection = joinVoiceChannel({
        channelId: channelState.id,
        guildId: channelState.guild.id,
        adapterCreator: channelState.guild.voiceAdapterCreator,
      });
      message.reply("test1")
    }
    else if (content.split(" ")[0] === "$stop"){
      connection.destroy()
    }
    else{
      message.reply("please join a voice channel")
    }



  }

};
