import * as QuestsApi from 'api/quests';
import { Quests } from 'types/models/Quests';

export enum QuestsAction {
  QUESTS_SUCCESS = 'QUESTS_SUCCESS',
  QUESTS_ERROR = 'QUESTS_ERROR',
}

export const actionQuestsSuccess = (payload: Quests.Response.Quests) => ({
  type: QuestsAction.QUESTS_SUCCESS,
  payload,
});

export const actionQuestsError = (error: any) => ({
  type: QuestsAction.QUESTS_ERROR,
  payload: error,
});

export const quests = async (
  params: Quests.Request.Quests,
  dispatch: ReducerDispatch<QuestsAction>,
): Promise<void> => {
  return new Promise(async (resolve) => {
    try {
      const res = await QuestsApi.quests(params);

      dispatch(actionQuestsSuccess(res));
    } catch (error) {
      dispatch(actionQuestsError(error));
    } finally {
      resolve();
    }
  });
}
