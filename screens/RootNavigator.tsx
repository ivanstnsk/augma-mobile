import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from 'screens/types';
import { useSession } from 'store/session';

import { UserNavigator } from './User';
import { AuthNavigator } from './Auth';

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  const session = useSession();

  return (
    <RootStack.Navigator
      initialRouteName="auth"
      screenOptions={{ headerShown: false }}
    >
      {session.token ? (
        <RootStack.Screen
          name="user"
          component={UserNavigator}
          options={{
            animationEnabled: false,
          }}
        />
      ) : (
        <RootStack.Screen
          name="auth"
          component={AuthNavigator}
          options={{
            animationEnabled: false,
          }}
        />
      )}
    </RootStack.Navigator>
  );
}
