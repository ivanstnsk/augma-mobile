import { TutorialsAction } from './tutorialsActions';

export type TutorialsStore = {
  welcomeDone: boolean;
};

export const initState: TutorialsStore = {
  welcomeDone: false,
};

export const tutorialsReducer = (
  state = initState,
  action: ReducerAction<TutorialsAction>
) => {
  switch (action.type) {
    case TutorialsAction.WELCOME_MARK_AD_DONE: {
      return {
        ...state,
        welcomeDone: true,
      };
    }
    default: {
      return state;
    }
  }
};
