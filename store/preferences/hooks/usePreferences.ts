import { useSelector } from 'react-redux';

import { RootStore } from 'store';
import { PreferencesStore } from '../preferencesReducer';

type PreferencesHook = PreferencesStore;

export const usePreferences = (): PreferencesHook => {
  const preferences = useSelector<RootStore, PreferencesStore>((state) => state.preferences);

  return preferences;
}
