import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootStore } from 'store';
import { actionGlobalErrorRemove } from '../globalErrorActions';
import { GlobalErrorReducerState } from '../globalErrorReducer';

type GlobalErrorHook = {
  error: any,
  handle: () => void;
}

export const useGlobalError = (): GlobalErrorHook => {
  const dispatch = useDispatch();
  const error = useSelector<RootStore, GlobalErrorReducerState>((state) => state.globalError);

  const handle = React.useCallback(() => {
    dispatch(actionGlobalErrorRemove());
  }, [dispatch]);

  return {
    error: error.error,
    handle,
  }
}
