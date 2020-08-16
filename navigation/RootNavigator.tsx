import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from './types';
import { TabNavigator } from './TabNavigator';

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="main" component={TabNavigator} />
      {/* <RootStack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} /> */}
    </RootStack.Navigator>
  );
}
