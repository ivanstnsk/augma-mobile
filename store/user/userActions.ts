import { UserCredentials } from 'types';
import * as UserApi from 'api/user';

export enum UserAction {
  USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
  USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS',

  USER_USER_SUCCESS = 'USER_USER_SUCCESS',

  USER_ERROR = 'USER_ERROR',
}

export type UserActionPayload =
UserApi.AuthRes & 
UserApi.UserRes;

export const actionError = (error: Record<string, unknown>) => ({
  type: UserAction.USER_ERROR,
  payload: error,
});

export const actionLoginSuccess = (payload: UserApi.AuthRes) => ({
  type: UserAction.USER_LOGIN_SUCCESS,
  payload,
});

export const actionLogoutSuccess = () => ({
  type: UserAction.USER_LOGOUT_SUCCESS,
  payload: {},
});

export const actionUserSuccess = (payload: UserApi.UserRes) => ({
  type: UserAction.USER_USER_SUCCESS,
  payload,
});

export const login = async (
  data: UserCredentials,
  dispatch: ReducerDispatch<UserAction>,
): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      const authRes = await UserApi.login(data);
      const userRes = await UserApi.user();
      
      dispatch(actionLoginSuccess(authRes));
      dispatch(actionUserSuccess(userRes));
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
      const authRes = await UserApi.registration(data);
      const userRes = await UserApi.user();

      dispatch(actionLoginSuccess(authRes));
      dispatch(actionUserSuccess(userRes));
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
