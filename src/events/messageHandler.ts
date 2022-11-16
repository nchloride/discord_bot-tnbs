import { getChannelByChannelId } from "..";
import { IChannel, IMessage, IUser } from "../resources/types";

export const messageHandler = async (message: IMessage) => {
  const content: string = message.content.trim();
  const individualWords = content.split(" ").filter((word) => word != "");
  const messageAuthor = message.author;
  const channel: IChannel = await getChannelByChannelId(message.channelId);

  if (content === "test") {
    message.reply("Test message acknowledged!");
  }
  if (content.toLowerCase() === "chester") {
    message.reply("<:Shreky:743867384695357530>");
  }

  const userMentions: IUser[] = message.mentions.users.map((x) => x);
  if (userMentions.length !== 0) {
    userMentions.forEach((user) => {
      if (user.username === "TNBS") {
        message.reply("Bat mo ko tinatawag?");
      }
    });
  }
  console.log(message);
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
  if (messageAuthor.bot && channel.name !== "music") {
    message.delete();
  }
};
