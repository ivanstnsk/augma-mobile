import { GlobalErrorAction } from './globalErrorActions';

export interface GlobalErrorReducerState {
  error?: any;
}

const initState: GlobalErrorReducerState = {};

export const globalErrorReducer = (state = initState, action: ReducerAction<GlobalErrorAction>) => {
  switch (action.type) {
    case GlobalErrorAction.GLOBAL_ERROR_PUT: {
      return {
        error: action.payload as any,
      };
    }
    case GlobalErrorAction.GLOBAL_ERROR_REMOVE: {
      return {
        error: undefined,
      };
    }
    default: {
      return state;
    }
  }
};
