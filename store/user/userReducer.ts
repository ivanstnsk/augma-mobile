import { User } from 'types/models/User';
import { Models } from 'types/models/models';

import { UserAction } from './userActions';

export type UserReducerState = Models.User;

export const initState: UserReducerState = {
  info: {
    name: '',
    avatarUrl: '',
  },
  doneTutorial: false,
};

export const userReducer = (state = initState, action: ReducerAction<UserAction>) => {
  switch (action.type) {
    case UserAction.USER_SUCCESS: {
      const { info, doneTutorial } = action.payload as User.Response.User;

      return {
        ...state,
        info,
        doneTutorial,
      }
    }
    default: {
      return state;
    }
  }
};
