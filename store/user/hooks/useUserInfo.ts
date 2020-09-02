import { useSelector } from 'react-redux';

import { UserInfo } from 'types';
import { RootStore } from 'store';
import { UserReducerState } from '../userReducer';

export const useUserInfo = (): UserInfo => {
  const { info } = useSelector<RootStore, UserReducerState>((state) => state.user);

  return info;
}
