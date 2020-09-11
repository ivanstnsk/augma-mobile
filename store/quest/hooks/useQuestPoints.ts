import { useSelector } from 'react-redux';

import { RootStore } from 'store';
import { Models } from 'types/models/models';

import { QuestStore } from '../questReducer';

type QuestPointsHook = Models.QuestPoints;

export const useQuestPoints = (): QuestPointsHook => {
  const { points } = useSelector<RootStore, QuestStore>((state) => state.quest);

  return points;
}
