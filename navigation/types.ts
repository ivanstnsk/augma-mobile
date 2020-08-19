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

export type QuestStackParamList = {
  quest: undefined;
};
