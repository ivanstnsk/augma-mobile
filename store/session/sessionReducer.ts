import { Models } from 'types/models/models';

import { SessionAction } from './sessionActions';

export type SessionStore = Models.Auth;

export const initState: SessionStore = {
  token: '',
};

export const sessionReducer = (
  state = initState,
  action: ReducerAction<SessionAction>
) => {
  switch (action.type) {
    case SessionAction.AUTH_SUCCESS: {
      const { token } = action.payload as Models.Auth;

      return {
        ...state,
        token
      };
    }
    case SessionAction.AUTH_CLEAR: {
      return {
        ...state,
        token: '',
      };
    }
    default: {
      return state;
    }
  }
};
