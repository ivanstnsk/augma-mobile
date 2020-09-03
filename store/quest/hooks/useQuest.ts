import { useSelector } from 'react-redux';

import { RootStore } from 'store';
import { QuestStore } from '../questReducer';

type QuestHook = QuestStore;

export const useQuest = (): QuestHook => {
  const quest = useSelector<RootStore, QuestStore>((state) => state.quest);

  return quest;
}
