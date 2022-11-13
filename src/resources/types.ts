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
  mentions: IMentions;
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

export interface IMentions {
  everyone: boolean;
  users: IUser[];
  roles: any;
  _members: any;
  _channels: any;
  _parsedUsers: any;
  crosspostedChannels: any;
  repliedUser: any;
}

export interface IChannel {
  type: number;
  guild: IGuild;
  guildId: string;
  parentId: string;
  permissionOverwrites: any;
  messages: any;
  threads: any;
  nsfw: boolean;
  flags: any;
  id: string;
  name: string;
  rawPosition: number;
  topic: any;
  lastMessageId: string;
  rateLimitPerUser: number;
}

export interface IGuild {
  id: string;
  name: string;
  icon: any;
  features: string[];
  commands: any;
  members: any;
  channels: any;
  bans: any;
  roles: any;
  presences: any;
  voiceStates: any;
  stageInstances: any;
  invites: any;
  scheduledEvents: any;
  available: boolean;
  shardId: number;
  splash: any;
  banner: any;
  description: any;
  verificationLevel: number;
  vanityURLCode: any;
  nsfwLevel: number;
  premiumSubscriptionCount: number;
  discoverySplash: any;
  memberCount: number;
  large: boolean;
  premiumProgressBarEnabled: boolean;
  applicationId: any;
  afkTimeout: number;
  afkChannelId: any;
  systemChannelId: any;
  premiumTier: number;
  widgetEnabled: any;
  widgetChannelId: any;
  explicitContentFilter: number;
  mfaLevel: number;
  joinedTimestamp: number;
  defaultMessageNotifications: number;
  systemChannelFlags: any;
  maximumMembers: number;
  maximumPresences: any;
  maxVideoChannelUsers: number;
  approximateMemberCount: any;
  approximatePresenceCount: any;
  vanityURLUses: any;
  rulesChannelId: any;
  publicUpdatesChannelId: any;
  preferredLocale: string;
  ownerId: string;
  emojis: any;
  stickers: any;
}
