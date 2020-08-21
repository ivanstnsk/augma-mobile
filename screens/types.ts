export type Routes =
| 'auth'
  | 'signIn'
  | 'signUp'
| 'main'
  | 'quests'
    | 'questsAll'
    | 'questsFinished'
  | 'account';

export type AuthStackParamList = {
  login: undefined;
  registration: undefined;
}

export type BottomTabParamList = {
  quests: undefined;
  account: undefined;
};

export type QuestsParamList = {
  questsAll: undefined;
  questsFinished: undefined;
};

export type AccountParamList = {
  account: undefined;
};

export type RootStackParamList = {
  user: undefined;
  auth: undefined;
  // quest: undefined;
};

export type UserStackParamList = {
  main: undefined;
  quest: undefined;
  questStart: undefined;
};

export type QuestBottomTabParamList = {
  questProgress: undefined;
  questMessages: undefined;
  questInventory: undefined;
  questMap: undefined;
};

export type QuestProgressParamList = {
  progress: undefined;
};

export type QuestMessagesParamList = {
  messages: undefined;
};

export type QuestInventoryParamList = {
  inventory: undefined;
};

export type QuestMapParamList = {
  map: undefined;
};
