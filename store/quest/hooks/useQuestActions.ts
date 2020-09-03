import { useDispatch } from 'react-redux';

import * as Actions from '../questActions';

type QuestActionsHook = {
  start: (questId: string) => void;
  finish: () => void;
};

export const useQuestActions = (): QuestActionsHook => {
  const dispatch = useDispatch();

  const start = (questId: string) => {
    dispatch(Actions.actionQuestStart(questId));
  }

  const finish = () => {
    dispatch(Actions.actionQuestFinish());
  }

  return {
    start,
    finish,
  };
}
