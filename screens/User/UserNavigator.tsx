import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { usePreferences } from 'store/preferences';
import { HeaderTitle } from 'components/HeaderTitle';
import { headerSecondaryStyles } from 'ui/styles';
import { UserStackParamList } from 'screens/types';

import { QuestStart } from './screens/QuestStart';
import { MainTabNavigator } from './MainTabNavigator';
import { QuestTabNavigator } from './QuestTabNavigator';
import { SetupNavigator } from './SetupNavigator';

const UserStack = createStackNavigator<UserStackParamList>();

export const UserNavigator: React.FC = () => {
  const Preferences = usePreferences();
  const questActive = false;

  return (
    <UserStack.Navigator
      screenOptions={{
        ...headerSecondaryStyles,
        headerTitle: HeaderTitle,
      }}
    >
      {questActive ? (
        <>
          <UserStack.Screen
            name="quest"
            component={QuestTabNavigator}
            options={{
              headerShown: false,
              animationTypeForReplace: questActive ? 'push' : 'pop',
            }}
          />
          {/* TODO: add quest stack modals here */}
        </>
      ) : (
        <>
          {Preferences.firstSetupDone === 'done' ? (
            <>
              <UserStack.Screen
                name="main"
                component={MainTabNavigator}
                options={{
                  headerShown: false,
                  animationTypeForReplace: questActive ? 'push' : 'pop',
                }}
              />
              <UserStack.Screen
                name="questStart"
                component={QuestStart}
                options={{
                  headerShown: false,
                }}
              />
              {/* TODO: add main stack modals here */}
            </>
          ) : (
            <UserStack.Screen
              name="setup"
              component={SetupNavigator}
              options={{
                headerShown: false,
              }}
            />
          )}
        </>
      )}
    </UserStack.Navigator>
  );
}
