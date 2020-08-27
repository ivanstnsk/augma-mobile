import { Quest, Pagination } from 'types';
import * as QuestsApi from 'api/quests';

export enum QuestsAction {
  QUESTS_GET_SUCCESS = 'QUESTS_GET_SUCCESS',
  QUESTS_GET_ERROR = 'QUESTS_GET_ERROR',
}

export type QuestsPayload =
| { items: Quest[] }
| any;

export const actionQuestsGetSuccess = (payload: QuestsPayload) => ({
  type: QuestsAction.QUESTS_GET_SUCCESS,
  payload,
});

export const actionQuestsGetError = (error: any) => ({
  type: QuestsAction.QUESTS_GET_ERROR,
  payload: error,
});

export const getQuests = async (params: Pagination, dispatch: ReducerDispatch<QuestsAction>) => {
  try {
    const res = await QuestsApi.getQuests(params);
    const { items } = res;

    dispatch(actionQuestsGetSuccess({ items }));
  } catch (error) {
    dispatch(actionQuestsGetError(error));
  }
}
