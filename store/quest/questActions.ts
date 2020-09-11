import * as QuestApi from 'api/quest';
import { Quests } from 'types/models/Quests';

export enum QuestAction {
  QUEST_START = 'QUEST_START',
  QUEST_FINISH = 'QUEST_FINISH',
  QUEST_POINTS_SUCCESS = 'QUEST_POINTS_SUCCESS',
  QUEST_POINTS_ERROR = 'QUEST_POINTS_ERROR',
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

export const actionQuestPointsSuccess = (payload: Quests.Response.QuestPoints) => ({
  type: QuestAction.QUEST_POINTS_SUCCESS,
  payload,
});

export const actionQuestPointsError = (error: any) => ({
  type: QuestAction.QUEST_POINTS_ERROR,
  payload: error,
});

export const questPoints = async (
  questId: string,
  params: Quests.Request.QuestPoints,
  dispatch: ReducerDispatch<QuestAction>,
): Promise<void> => {
  return new Promise(async (resolve) => {
    try {
      const res = await QuestApi.questPoints(questId, params);

      dispatch(actionQuestPointsSuccess(res));
    } catch (error) {
      dispatch(actionQuestPointsError(error));
    } finally {
      resolve();
    }
  });
}
