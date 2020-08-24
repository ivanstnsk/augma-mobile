import * as React from 'react';

export type Route = {
  name: string;
}

export interface ActivePageContext {
  route: Route;
  set: (route: Route) => void;
}

export const ActivePageContext = React.createContext<ActivePageContext>({
  route: {
    name: '',
  },
  set: () => {},
});
