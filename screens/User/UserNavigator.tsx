import * as React from 'react';
import {Dimensions} from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { usePreferences } from 'store/preferences';
import { useQuest } from 'store/quest';
import { HeaderTitle } from 'components/HeaderTitle';
import * as UIStyles from 'ui/styles';
import { UserStackParamList } from 'screens/types';
import { useLoader } from 'hooks/useLoader';

import { QuestStart } from './screens/QuestStart';
import { QuestMap } from './screens/QuestMap';
import { QuestStartTimer } from './screens/Modals/QuestStartTimer';
import { InventoryItemInfo } from './screens/Modals/InventoryItemInfo';
import { InventoryItemApply } from './screens/Modals/InventoryItemApply';
import { MainTabNavigator } from './MainTabNavigator';
import { QuestTabNavigator } from './QuestTabNavigator';
import { SetupNavigator } from './SetupNavigator';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

const UserStack = createStackNavigator<UserStackParamList>();

export const UserNavigator: React.FC = () => {
  const [questActive, setQuestActive] = React.useState(false);
  const Loader = useLoader();
  const Preferences = usePreferences();
  const Quest = useQuest();

  React.useEffect(() => {
    Loader.show('solid');
    setTimeout(() => setQuestActive(!!Quest.id), 300);
    setTimeout(Loader.hide, 600);
  }, [Quest.id]);

  return (
    <UserStack.Navigator
      screenOptions={{
        ...UIStyles.headerSecondaryStyles,
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
              animationEnabled: false
            }}
          />
          <UserStack.Screen
            name="inventoryItemInfo"
            component={InventoryItemInfo}
            options={{
              ...TransitionPresets.ModalSlideFromBottomIOS,
              animationEnabled: true,
              headerShown: false,
              cardStyle: { backgroundColor: 'transparent' },
              cardOverlayEnabled: true,
              cardStyleInterpolator: UIStyles.modalDefaultInterpolator,
              gestureResponseDistance: {
                vertical: SCREEN_HEIGHT,
              }
            }}
          />
          <UserStack.Screen
            name="inventoryItemApply"
            component={InventoryItemApply}
            options={{
              ...TransitionPresets.ModalSlideFromBottomIOS,
              animationEnabled: true,
              headerShown: false,
              cardStyle: { backgroundColor: 'transparent' },
              cardOverlayEnabled: true,
              cardStyleInterpolator: UIStyles.modalDefaultInterpolator,
              gestureResponseDistance: {
                vertical: SCREEN_HEIGHT,
              }
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
                  animationEnabled: false
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
                  cardStyleInterpolator: UIStyles.modalDefaultInterpolator,
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
      <UserStack.Screen
        name="questMap"
        component={QuestMap}
        options={{
          ...TransitionPresets.ModalPresentationIOS,
          animationEnabled: true,
          headerShown: false,
          cardStyle: { backgroundColor: 'transparent' },
          cardOverlayEnabled: true,
          cardStyleInterpolator: UIStyles.modalOpacityInterpolator,
          gestureResponseDistance: {
            vertical: 0,
          }
        }}
      />
    </UserStack.Navigator>
  );
}
