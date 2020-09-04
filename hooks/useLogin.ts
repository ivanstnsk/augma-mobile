import { useDispatch } from 'react-redux';

import { Session } from 'types/models/Session';
import { Models } from 'types/models/models';
import * as SessionActions from 'store/session';
import { useLoader } from 'hooks/useLoader';

type LoginHook = {
  userType: Models.UserType;
  login: (data: Session.Request.Login) => Promise<void>;
  registration: (data: Session.Request.Registration) => Promise<void>;
  logout: () => Promise<void>;
}

export const useLogin = (): LoginHook => {
  const dispatch = useDispatch();
  const Loader = useLoader();
  const { token } = SessionActions.useSession();

  const login = async (data: Session.Request.Login): Promise<void> => {
    return new Promise(async (resolve, reject) => {
      Loader.show('solid');
      try {
        await SessionActions.login(data, dispatch);
        resolve();
      } catch (error) {
        reject(error);
      }
      Loader.hide();
    });
  }

  const registration = async (data: Session.Request.Registration) => {
    Loader.show('solid');
    await SessionActions.registration(data, dispatch);
    Loader.hide();
  }

  const logout = async () => {
    Loader.show('solid');
    await SessionActions.logout(dispatch);
    Loader.hide();
  }

  return {
    userType: token ? 'user' : 'guest',
    login,
    registration,
    logout,
  }
}
