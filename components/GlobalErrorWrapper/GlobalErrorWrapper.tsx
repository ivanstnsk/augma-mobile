import * as React from 'react';
import { Alert } from 'react-native';

import * as GlobalError from 'store/globalError';

export const GlobalErrorWrapper: React.FC = ({ children }) => {
  const Error = GlobalError.useGlobalError();

  if (Error.error) {
    Alert.alert('Произошла ошибка');
    Error.handle();
  }

  return <>{children}</>;
}
