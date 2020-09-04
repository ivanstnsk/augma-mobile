import { useDispatch } from 'react-redux';

import { Session } from 'types/models/Session';

import * as Actions from '../sessionActions';

type SessionActionsHook = {
  login: (data: Session.Request.Login) => Promise<void>;
  registration: (data: Session.Request.Registration) => Promise<void>;
  logout: () => Promise<void>;
};

export const useSessionActions = (): SessionActionsHook => {
  const dispatch = useDispatch();

  const login = (data: Session.Request.Login) => {
    return Actions.login(data, dispatch);
  }

  const registration = (data: Session.Request.Registration) => {
    return Actions.registration(data, dispatch);
  }

  const logout = () => {
    return Actions.logout(dispatch);
  }

  return {
    login,
    registration,
    logout,
  };
}
