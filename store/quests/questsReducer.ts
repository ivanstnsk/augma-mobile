import { Models } from 'types/models/models';

import { QuestsAction } from './questsActions';
import { Quests } from 'types/models/Quests';

export type QuestsStore = Models.Quests;

export const initState: QuestsStore = {
  items: [],
};

export const questsReducer = (
  state = initState,
  action: ReducerAction<QuestsAction>
) => {
  switch (action.type) {
    case QuestsAction.QUESTS_SUCCESS: {
      const { items } = action.payload as Quests.Response.Quests;

      return {
        ...state,
        items: [ ...items ],
      };
    }
    default: {
      return state;
    }
  }
};
