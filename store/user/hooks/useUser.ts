import { useSelector } from 'react-redux';

import { RootStore } from 'store';
import { UserReducerState } from '../userReducer';
import { Models } from 'types/models/models';

export const useUserInfo = (): Models.User => {
  const user = useSelector<RootStore, UserReducerState>((state) => state.user);

  return user;
}
