declare type QuestCheckPoint = {
  id: string;
  name: string;
};

declare type QuestInfoDescription = {
  goal: string;
  points: QuestCheckPoint[]
};

declare type QuestInfo = {
  id: string;
  name: string;
  description: QuestInfoDescription;
  level: number;
  limitation: number;
};
