import { UserAction, UserActionPayload } from './userActions';

export interface UserReducerState {
  token?: string;
  info: {
    name: string;
  };
  doneTutorial: boolean;
}

export const initState: UserReducerState = {
  token: '',
  info: {
    name: '',
  },
  doneTutorial: false,
};

export const userReducer = (state = initState, action: ReducerAction<UserAction>) => {
  switch (action.type) {
    case UserAction.USER_LOGIN_SUCCESS: {
      const { token } = action.payload as UserActionPayload;

      return {
        ...state,
        token,
      };
    }
    case UserAction.USER_USER_SUCCESS: {
      const { info, doneTutorial } = action.payload as UserActionPayload;

      return {
        ...state,
        info,
        doneTutorial,
      }
    }
    case UserAction.USER_LOGOUT_SUCCESS: {
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
