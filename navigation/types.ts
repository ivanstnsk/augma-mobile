export type Routes =
| 'auth'
  | 'signIn'
  | 'signUp'
| 'main'
  | 'quests'
    | 'questsAll'
    | 'questsFinished'
  | 'account';

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
  main: undefined;
  quest: undefined;
};

export type MainStackParamList = {
  main: undefined;
  questStart: undefined;
};

export type QuestBottomTabParamList = {
  questProgress: undefined;
  questMessages: undefined;
  questMap: undefined;
};

export type QuestProgressParamList = {
  progress: undefined;
};

export type QuestMessagesParamList = {
  messages: undefined;
};

export type QuestMapParamList = {
  map: undefined;
};
