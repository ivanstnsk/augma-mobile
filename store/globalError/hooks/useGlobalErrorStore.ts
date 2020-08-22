import { useSelector } from 'react-redux';

import { RootStore } from '../../rootStore';

export const useGlobalErrorStore = () => {
  return useSelector<RootStore, RootStore['globalError']>((state) => state.globalError);
};
