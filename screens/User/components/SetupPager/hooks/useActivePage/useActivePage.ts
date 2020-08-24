import * as React from 'react';

import { ActivePageContext } from './ActivePageContext';

export const useActivePage = (): ActivePageContext => {
  return React.useContext(ActivePageContext);
};
