import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from './types';
import { MainNavigator } from './MainNavigator';
import { QuestTabNavigator } from './QuestTabNavigator';

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="main" component={MainNavigator} />
      <RootStack.Screen name="quest" component={QuestTabNavigator} />
    </RootStack.Navigator>
  );
}
