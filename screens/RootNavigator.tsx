import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from 'screens/types';
import { useUserType } from 'store/user';

import { UserNavigator } from './User';
import { AuthNavigator } from './Auth';

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  const userType = useUserType();
  
  const auth = userType === 'user';

  return (
    <RootStack.Navigator
      initialRouteName="auth"
      screenOptions={{ headerShown: false }}
    >
      {auth ? (
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
