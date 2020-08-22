import { useSelector } from 'react-redux';

import { UserType } from 'types';
import { RootStore } from 'store';
import { UserReducerState } from '../userReducer';

export const useUserType = (): UserType => {
  const user = useSelector<RootStore, UserReducerState>((state) => state.user);

  return user.token ? 'user' : 'anon';
}
