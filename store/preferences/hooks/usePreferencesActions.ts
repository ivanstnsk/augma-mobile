import { useDispatch } from 'react-redux';
import { PreferencesItemStatus } from 'types';

import * as Actions from '../preferencesActions';

type PreferencesActionsHook = {
  setFirstSetupStatus: (status: PreferencesItemStatus) => void;
};

export const usePreferencesActions = (): PreferencesActionsHook => {
  const dispatch = useDispatch();

  const setFirstSetupStatus = (status: PreferencesItemStatus) => {
    dispatch(Actions.actionFirstSetupSetStatus(status));
  }

  return {
    setFirstSetupStatus,
  };
}
