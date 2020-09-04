import { useDispatch } from 'react-redux';

import { UserType, UserCredentials } from 'types';
import * as User from 'store/user';
import { useLoader } from 'hooks/useLoader';

type LoginHook = {
  userType: UserType;
  login: (data: UserCredentials) => Promise<void>;
  registration: (data: UserCredentials) => void;
  logout: () => void;
}

export const useLogin = (): LoginHook => {
  const dispatch = useDispatch();
  const Loader = useLoader();
  const userType = User.useUserType();

  const login = async (data: UserCredentials): Promise<void> => {
    return new Promise(async (resolve, reject) => {
      Loader.show('solid');
      try {
        await User.login(data, dispatch);
        resolve();
      } catch (error) {
        reject(error);
      }
      Loader.hide();
    });
  }

  const registration = async (data: UserCredentials) => {
    Loader.show('solid');
    await User.registration(data, dispatch);
    Loader.hide();
  }

  const logout = async () => {
    Loader.show('solid');
    await User.logout(dispatch);
    Loader.hide();
  }

  return {
    userType,
    login,
    registration,
    logout,
  }
}
