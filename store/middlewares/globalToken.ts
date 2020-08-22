import * as Redux from 'redux';

import * as ClientApi from 'api/client';
import { UserAction } from 'store/user';

export const globalToken: Redux.Middleware = () => (next) => (action) => {
  if (action.type === UserAction.USER_LOGIN_SUCCESS) {
    const token = action.payload as string;
    
    if (token) {
      ClientApi.saveToken(token);
    }
  }

  return next(action);
};
