import { QuestAction, QuestPayload } from './questActions';

export interface QuestStore {
  id?: string;
}

export const initState: QuestStore = {
  id: undefined,
};

export const questReducer = (
  state = initState,
  action: ReducerAction<QuestAction>
) => {
  switch (action.type) {
    case QuestAction.QUEST_START: {
      const { id } = action.payload as QuestPayload;

      return {
        ...state,
        id
      };
    }
    case QuestAction.QUEST_FINISH: {
      return initState;
    }
    default: {
      return state;
    }
  }
};
