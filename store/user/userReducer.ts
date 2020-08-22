import { UserAction } from './userActions';

export interface UserReducerState {
  token?: string;
}

export const initState: UserReducerState = {
  token: '',
};

export const userReducer = (state = initState, action: ReducerAction<UserAction>) => {
  switch (action.type) {
    case UserAction.USER_LOGIN_SUCCESS: {
      const token = action.payload as string;

      return {
        ...state,
        token,
      };
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
