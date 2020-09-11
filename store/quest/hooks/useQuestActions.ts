import { useDispatch } from 'react-redux';

import { Quests } from 'types/models/Quests';

import * as Actions from '../questActions';

type QuestActionsHook = {
  start: (questId: string) => void;
  finish: () => void;
  questPoints: (questId: string, params: Quests.Request.QuestPoints) => Promise<void>;
};

export const useQuestActions = (): QuestActionsHook => {
  const dispatch = useDispatch();

  const start = (questId: string) => {
    dispatch(Actions.actionQuestStart(questId));
  }

  const finish = () => {
    dispatch(Actions.actionQuestFinish());
  }

  const questPoints = (questId: string, params: Quests.Request.QuestPoints) => {
    return Actions.questPoints(questId, params, dispatch);
  };

  return {
    start,
    finish,
    questPoints,
  };
}
