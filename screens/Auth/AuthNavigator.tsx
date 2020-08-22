import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthStackParamList } from 'screens/types';

import { Login } from './screens/Login';
import { Registration } from './screens/Registration';

const AuthStack = createStackNavigator<AuthStackParamList>();

export const AuthNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen
        name="login"
        component={Login}
      />
      <AuthStack.Screen
        name="registration"
        component={Registration}
      />
    </AuthStack.Navigator>
  );
}
