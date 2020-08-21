import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from './types';
import { UserNavigator } from './User';
import { AuthNavigator } from './Auth';

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  const auth = true;

  return (
    <RootStack.Navigator
      initialRouteName="auth"
      screenOptions={{ headerShown: false }}
    >
      {auth ? (
        <RootStack.Screen
          name="user"
          component={UserNavigator}
        />
      ) : (
        <RootStack.Screen
          name="auth"
          options={{
            animationTypeForReplace: auth ? 'push' : 'pop',
          }}
          component={AuthNavigator}
        />
      )}
    </RootStack.Navigator>
  );
}
