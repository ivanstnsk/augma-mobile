import { PreferencesItemStatus } from 'types';

import { PreferencesAction, PrerefencesPayload } from './preferencesActions';

export interface PreferencesStore {
  firstSetupDone: PreferencesItemStatus;
}

export const initState: PreferencesStore = {
  firstSetupDone: 'none',
};

export const preferencesReducer = (
  state = initState,
  action: ReducerAction<PreferencesAction>
) => {
  switch (action.type) {
    case PreferencesAction.PREFERENCES_FIRST_SETUP_SET_STATUS: {
      const { status } = action.payload as PrerefencesPayload;

      return {
        ...state,
        firstSetupDone: status,
      };
    }
    default: {
      return state;
    }
  }
};
