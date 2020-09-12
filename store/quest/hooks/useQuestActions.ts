import AsyncStorage from '@react-native-community/async-storage';
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

  const start = async (questId: string) => {
    try {
      await AsyncStorage.setItem('@questStartedId', questId);
      dispatch(Actions.actionQuestStart(questId));
    } catch (error) {
      console.log(error);
    }
  }

  const finish = async () => {
    try {
      await AsyncStorage.removeItem('@questStartedId');
      dispatch(Actions.actionQuestFinish());
    } catch (error) {
      console.log(error);
    }
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
