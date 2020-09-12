import { useSelector } from 'react-redux';

import { RootStore } from 'store';
import { TutorialsStore } from '../tutorialsReducer';

type TutorialsHook = TutorialsStore;

export const useTutorials = (): TutorialsHook => {
  const tutorials = useSelector<RootStore, TutorialsStore>((state) => state.tutorials);

  return tutorials;
}
