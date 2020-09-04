import * as SessionApi from 'api/session';
import { Models } from 'types/models/models';
import { Session } from 'types/models/Session';

export enum SessionAction {
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  AUTH_CLEAR = 'AUTH_CLEAR',
  AUTH_ERROR = 'AUTH_ERROR',
}

export const actionAuthSuccess = (payload: Models.Auth) => ({
  type: SessionAction.AUTH_SUCCESS,
  payload,
});

export const actionAuthClear = () => ({
  type: SessionAction.AUTH_CLEAR,
  payload: {},
});

export const actionError = (payload: any) => ({
  type: SessionAction.AUTH_ERROR,
  payload,
});

export const login = async (
  data: Session.Request.Login,
  dispatch: ReducerDispatch<SessionAction>,
): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await SessionApi.login(data);
      
      dispatch(actionAuthSuccess(res));
      resolve();
    } catch (error) {
      dispatch(actionError(error));
      reject(error);
    }
  });
};

export const registration = async (
  data: Session.Request.Registration,
  dispatch: ReducerDispatch<SessionAction>,
): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await SessionApi.registration(data);

      dispatch(actionAuthSuccess(res));
      resolve();
    } catch (error) {
      dispatch(actionError(error));
      reject(error);
    }
  });
};

export const logout = async (
  dispatch: ReducerDispatch<SessionAction>,
): Promise<void> => {
  return new Promise(async (resolve) => {
    try {
      await SessionApi.logout();
      //
      dispatch(actionAuthClear());
    } catch (error) {
      dispatch(actionError(error));
    } finally {
      resolve();
    }
  });
}
