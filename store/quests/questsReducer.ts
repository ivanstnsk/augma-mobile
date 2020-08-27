import { Quest } from 'types';

import { QuestsAction, QuestsPayload } from './questsActions';

export interface QuestsStore {
  items: Quest[];
}

export const initState: QuestsStore = {
  items: [],
};

export const questsReducer = (
  state = initState,
  action: ReducerAction<QuestsAction>
) => {
  switch (action.type) {
    case QuestsAction.QUESTS_GET_SUCCESS: {
      const { items } = action.payload as QuestsPayload;

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
