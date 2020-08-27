export type QuestPoint = {
  id: string;
  name: string;
};

export type Quest = {
  id: string;
  name: string;
  imageUrl: string;
  level: number;
  limitation: number;
  description: {
    goal: string;
    points: QuestPoint[];
  }
};
