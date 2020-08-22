import * as Redux from 'redux';

import { actionGlobalErrorPut } from '../globalError/globalErrorActions';

export const globalError: Redux.Middleware = () => (next) => (action) => {
  if (action.type.endsWith('ERROR')) {
    next(actionGlobalErrorPut(action.payload));
  }

  return next(action);
};
