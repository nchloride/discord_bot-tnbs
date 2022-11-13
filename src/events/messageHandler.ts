import { IMessage, IUser } from "../resources/types";

export const messageHandler = (message: IMessage) => {
  const content: string = message.content;
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
};
