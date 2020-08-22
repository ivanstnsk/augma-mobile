import { useDispatch } from 'react-redux';

import { UserType, UserCredentials } from 'types';
import * as User from 'store/user';
import { useLoader } from 'hooks/useLoader';

type LoginHook = {
  userType: UserType;
  login: (data: UserCredentials) => void;
  logout: () => void;
}

export const useLogin = (): LoginHook => {
  const dispatch = useDispatch();
  const Loader = useLoader();
  const userType = User.useUserType();

  const login = async (data: UserCredentials) => {
    Loader.show();
    await User.login(data, dispatch);
    Loader.hide();
  }

  const logout = async () => {
    Loader.show();
    await User.logout(dispatch);
    Loader.hide();
  }

  return {
    userType,
    login,
    logout,
  }
}
