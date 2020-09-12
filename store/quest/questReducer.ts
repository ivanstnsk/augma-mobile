import { Quests } from 'types/models/Quests';

import { QuestAction, QuestPayload } from './questActions';
import { Models } from 'types/models/models';

export interface QuestStore {
  id?: string;
  points: Models.QuestPoints;
  info?: Models.QuestInfo;
}

export const initState: QuestStore = {
  id: undefined,
  points: {
    items: [],
  },
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
    case QuestAction.QUEST_POINTS_SUCCESS: {
      const { items } = action.payload as Quests.Response.QuestPoints;

      return {
        ...state,
        points: {
          items: [ ...items ]
        },
      };
    }
    case QuestAction.QUEST_INFO_SUCCESS: {
      const info = action.payload as Quests.Response.QuestInfo;

      return {
        ...state,
        info,
      };
    }
    default: {
      return state;
    }
  }
};
