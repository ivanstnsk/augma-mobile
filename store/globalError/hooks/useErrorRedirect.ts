import * as Redux from 'react-redux';
import * as Navigation from '@react-navigation/native';

import { useGlobalErrorStore } from './useGlobalErrorStore';
import { actionGlobalErrorRemove } from '../globalErrorActions';

export const useErrorRedirect = () => {
  const state = useGlobalErrorStore();
  const dispatch = Redux.useDispatch();
  const navigation = Navigation.useNavigation();

  if (state.error) {
    dispatch(actionGlobalErrorRemove());
    navigation.goBack();
  }
};
