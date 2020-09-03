import * as React from 'react';
import {Dimensions} from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { usePreferences } from 'store/preferences';
import { useQuest } from 'store/quest';
import { HeaderTitle } from 'components/HeaderTitle';
import { headerSecondaryStyles, cardStyleInterpolator } from 'ui/styles';
import { UserStackParamList } from 'screens/types';

import { QuestStart } from './screens/QuestStart';
import { QuestStartTimer } from './screens/QuestStartTimer';
import { MainTabNavigator } from './MainTabNavigator';
import { QuestTabNavigator } from './QuestTabNavigator';
import { SetupNavigator } from './SetupNavigator';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

const UserStack = createStackNavigator<UserStackParamList>();

export const UserNavigator: React.FC = () => {
  const Preferences = usePreferences();
  const Quest = useQuest();

  const questActive = Quest.id;

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
                }}
              />
              <UserStack.Screen
                name="questStart"
                component={QuestStart}
                options={{
                  headerShown: false,
                }}
              />
              <UserStack.Screen
                name="questStartTimer"
                component={QuestStartTimer}
                options={{
                  ...TransitionPresets.ModalSlideFromBottomIOS,
                  animationEnabled: true,
                  headerShown: false,
                  cardStyle: { backgroundColor: 'transparent' },
                  cardOverlayEnabled: true,
                  cardStyleInterpolator,
                  gestureResponseDistance: {
                    vertical: SCREEN_HEIGHT,
                  }
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
