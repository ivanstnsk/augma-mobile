import { useSelector } from 'react-redux';

import { RootStore } from 'store';
import { QuestsStore } from '../questsReducer';

type QuestsHook = QuestsStore;

export const useQuests = (): QuestsHook => {
  const quests = useSelector<RootStore, QuestsStore>((state) => state.quests);

  return quests;
}
