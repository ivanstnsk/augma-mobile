import { useDispatch } from 'react-redux';

import * as Actions from '../userActions';

type UserActionsHook = {
  user: () => Promise<void>;
};

export const useUserActions = (): UserActionsHook => {
  const dispatch = useDispatch();

  const user = () => {
    return Actions.user(dispatch);
  }

  return {
    user,
  };
}
