import * as React from 'react';

export interface LoadingContext {
  show: (bgVariant?: 'transparent' | 'solid') => void;
  hide: () => void;
  visible: boolean;
}

export const LoadingContext = React.createContext<LoadingContext>({
  show: () => {},
  hide: () => {},
  visible: false,
});
