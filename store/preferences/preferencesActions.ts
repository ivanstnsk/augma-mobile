import { PreferencesItemStatus } from 'types';

export enum PreferencesAction {
  PREFERENCES_FIRST_SETUP_SET_STATUS = 'PREFERENCES_FIRST_SETUP_SET_STATUS',
}

export type PrerefencesPayload =
| { status: PreferencesItemStatus };

export const actionFirstSetupSetStatus = (status: PreferencesItemStatus) => ({
  type: PreferencesAction.PREFERENCES_FIRST_SETUP_SET_STATUS,
  payload: {
    status,
  },
});
