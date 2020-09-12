import { useDispatch } from 'react-redux';

import * as Actions from '../tutorialsActions';

type TutorialsActionsHook = {
  welcomeMarkAdDone: () => void
};

export const useTutorialsActions = (): TutorialsActionsHook => {
  const dispatch = useDispatch();

  const welcomeMarkAdDone = () => {
    return dispatch(Actions.actionWelcomeMarkAsDone());
  }

  return {
    welcomeMarkAdDone,
  };
}
