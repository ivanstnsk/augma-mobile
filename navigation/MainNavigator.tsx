import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MainStackParamList } from './types';
import { TabNavigator } from './TabNavigator';
import { Quest } from '../screens/Quest';
import { HeaderTitle } from '../components/HeaderTitle';
import { headerSecondaryStyles } from '../ui/styles';

const MainStack = createStackNavigator<MainStackParamList>();

export const MainNavigator: React.FC = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        ...headerSecondaryStyles,
        headerTitle: HeaderTitle,
      }}
    >
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
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  );
}
