import * as React from 'react';
import { useDispatch } from 'react-redux';

import { Quests } from 'types/models/Quests';

import * as Actions from '../questsActions';

type QuestsActionsHook = {
  quests: (params: Quests.Request.Quests) => Promise<void>;
};

export const useQuestsActions = (): QuestsActionsHook => {
  const dispatch = useDispatch();

  const quests = (params: Quests.Request.Quests) => {
    return Actions.quests(params, dispatch);
  };

  return {
    quests,
  };
}
