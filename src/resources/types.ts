export interface IMessage {
  channelId: string;
  guildId: string;
  id: string;
  createdTimeStamp: number;
  type: number;
  system: boolean;
  content: string;
  author: IUser;
  pinned: boolean;
  tts: boolean;
  nonce: string;
  embeds: any[]; // Di pa alam kung para san
  components: any[]; // Di pa alam kung para san
  attachments: any;
  stickers: any;
  position: any;
  editedTimeStamp: any;
  reactions: any;
  mentions: any;
  webhookId: any;
  groupActivityApplication: any;
  applicationId: any;
  activity: any;
  flags: any;
  reference: any;
  interaction: any;
  reply: (reply: any) => any;
}

export interface IUser {
  id: string;
  bot: boolean;
  system: boolean;
  flags: any;
  username: string;
  discriminator: string; // #ID
  avatar: string;
  banner: any;
  accentColor: any;
}
