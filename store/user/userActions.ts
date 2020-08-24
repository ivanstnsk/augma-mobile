import { UserCredentials } from 'types';
import * as UserApi from 'api/user';

export enum UserAction {
  USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
  USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS',

  USER_ERROR = 'USER_ERROR',
}

export const actionError = (error: Record<string, unknown>) => ({
  type: UserAction.USER_ERROR,
  payload: error,
});

export const actionLoginSuccess = (token: string) => ({
  type: UserAction.USER_LOGIN_SUCCESS,
  payload: token,
});

export const actionLogoutSuccess = () => ({
  type: UserAction.USER_LOGOUT_SUCCESS,
  payload: {},
});

export const login = async (
  data: UserCredentials,
  dispatch: ReducerDispatch<UserAction>,
): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      const { token } = await UserApi.login(data);
  
      dispatch(actionLoginSuccess(token));
      resolve();
    } catch (error) {
      dispatch(actionError(error));
      reject(error);
    }
  });
};

export const registration = async (data: UserCredentials, dispatch: ReducerDispatch<UserAction>) => {
  return new Promise(async (resolve) => {
    try {
      const { token } = await UserApi.registration(data);

      dispatch(actionLoginSuccess(token));
    } catch (error) {
      dispatch(actionError(error));
    } finally {
      resolve();
    }
  });
};

export const logout = async (dispatch: ReducerDispatch<UserAction>) => {
  return new Promise(async (resolve) => {
    try {
      await UserApi.logout();
      //
      dispatch(actionLogoutSuccess());
    } catch (error) {
      dispatch(actionError(error));
    } finally {
      resolve();
    }
  });
}
