import * as React from 'react';
import { Alert } from 'react-native';

import * as GlobalError from 'store/globalError';
import * as SessionAll from 'store/session';

export const GlobalErrorWrapper: React.FC = ({ children }) => {
  const Error = GlobalError.useGlobalError();
  const SessionActions = SessionAll.useSessionActions();

  if (Error.error) {
    Alert.alert('Произошла ошибка');
    Error.handle();
  }

  if (Error.error?.response?.status === 401) {
    SessionActions.logout();
  }

  return <>{children}</>;
}
