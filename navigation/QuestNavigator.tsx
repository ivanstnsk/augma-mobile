import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { QuestStackParamList } from './types';
import { Quest } from '../screens/Quest';
import { HeaderTitle } from '../components/HeaderTitle';
import { headerSecondaryStyles } from '../ui/styles';

const QuestStack = createStackNavigator<QuestStackParamList>();

export const QuestNavigator: React.FC = () => {
  return (
    <QuestStack.Navigator
      screenOptions={{
        ...headerSecondaryStyles,
        headerTitle: HeaderTitle,
      }}
    >
      <QuestStack.Screen
        name="quest"
        component={Quest}
        options={{
          headerShown: false,
        }}
      />
    </QuestStack.Navigator>
  );
}
