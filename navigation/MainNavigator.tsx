import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MainStackParamList } from './types';
import { TabNavigator } from './TabNavigator';
import { Quest } from '../screens/Quest';
import { Header } from '../components/Header';

const MainStack = createStackNavigator<MainStackParamList>();

export const MainNavigator: React.FC = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="main"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="quest"
        component={Quest}
        options={{
          header: Header
        }}
      />
    </MainStack.Navigator>
  );
}
