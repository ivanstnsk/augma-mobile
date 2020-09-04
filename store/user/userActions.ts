import * as UserApi from 'api/user';
import { User } from 'types/models/User';

export enum UserAction {
  USER_SUCCESS = 'USER_SUCCESS',

  USER_ERROR = 'USER_ERROR',
}

export const actionError = (error: Record<string, unknown>) => ({
  type: UserAction.USER_ERROR,
  payload: error,
});

export const actionUserSuccess = (payload: User.Response.User) => ({
  type: UserAction.USER_SUCCESS,
  payload,
});

export const user = async (
  dispatch: ReducerDispatch<UserAction>,
): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await UserApi.user();
      
      dispatch(actionUserSuccess(res));
      resolve();
    } catch (error) {
      dispatch(actionError(error));
      reject(error);
    }
  });
};
