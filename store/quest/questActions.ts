export enum QuestAction {
  QUEST_START = 'QUEST_START',
  QUEST_FINISH = 'QUEST_FINISH',
}

export type QuestPayload = { id: string } & {};

export const actionQuestStart = (id: string) => ({
  type: QuestAction.QUEST_START,
  payload: {
    id,
  },
});

export const actionQuestFinish = () => ({
  type: QuestAction.QUEST_FINISH,
  payload: {},
});
