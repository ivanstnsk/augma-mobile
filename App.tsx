import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import { Navigation } from './navigation';
import { GlobalErrorWrapper } from 'components/GlobalErrorWrapper';
import { LoadingWrapper } from 'components/LoadingWrapper';
import { GlobalTimerCounter } from 'components/GlobalTimerCounter';
import { store } from 'store';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <GlobalErrorWrapper>
          <LoadingWrapper>
            <SafeAreaProvider>
              <Navigation />
              <StatusBar style="light"/>
              <GlobalTimerCounter />
            </SafeAreaProvider>
          </LoadingWrapper>
        </GlobalErrorWrapper>
      </Provider>
    );
  }
}
