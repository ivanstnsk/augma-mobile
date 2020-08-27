import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Pagination } from 'types';

import * as Actions from '../questsActions';

type QuestsActionsHook = {
  getQuests: (params: Pagination) => Promise<void>;
};

export const useQuestsActions = (): QuestsActionsHook => {
  const dispatch = useDispatch();

  const getQuests = React.useCallback((params: Pagination) => {
    return Actions.getQuests(params, dispatch);
  }, []);

  return {
    getQuests,
  };
}
