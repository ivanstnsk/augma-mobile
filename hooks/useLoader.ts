import * as React from 'react';

import { LoadingContext } from 'components/LoadingWrapper';

export const useLoader = () => {
  return React.useContext(LoadingContext);
};
