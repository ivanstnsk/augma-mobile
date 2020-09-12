import * as Redux from 'redux';

import * as ClientApi from 'api/client';
import { SessionAction } from 'store/session';
import { Models } from 'types/models/models';

export const globalToken: Redux.Middleware = () => (next) => (action) => {
  if (action.type === SessionAction.AUTH_SUCCESS) {
    const { token } = action.payload as Models.Auth;
    
    if (token) {
      ClientApi.saveToken(token);
    }
  }

  if (action.type === SessionAction.AUTH_ERROR || action.type === SessionAction.AUTH_CLEAR) {
    ClientApi.removeToken();
  }

  return next(action);
};
