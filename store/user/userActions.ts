import { UserCredentials } from 'types';

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

export const login = async (data: UserCredentials, dispatch: ReducerDispatch<UserAction>) => {
  return new Promise(async (resolve) => {
    try {
      await new Promise((res) => setTimeout(res, 800));
      // const { token } = await UserApi.signIn(data);
  
      const token = '123';
      dispatch(actionLoginSuccess(token));
    } catch (error) {
      dispatch(actionError(error));
    } finally {
      resolve();
    }
  });
};

export const registration = async (data: UserCredentials, dispatch: ReducerDispatch<UserAction>) => {
  return new Promise(async (resolve) => {
    try {
      await new Promise((res) => setTimeout(res, 800));
      // const { token } = await UserApi.signIn(data);
  
      const token = '123';
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
      await new Promise((res) => setTimeout(res, 800));
      //
      dispatch(actionLogoutSuccess());
    } catch (error) {
      dispatch(actionError(error));
    } finally {
      resolve();
    }
  });
}
