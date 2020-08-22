import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { RootNavigator } from 'screens/RootNavigator';

type Props = {};

export const Navigation: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
