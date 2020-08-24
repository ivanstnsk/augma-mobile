import * as React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { SetupTabParamList } from 'screens/types';

import { SetupHeader, SetupPager } from './components';
import { Welcome } from './screens/Welcome';
import { Geolocation } from './screens/Geolocation';
import { Notification } from './screens/Notification';
import { Finish } from './screens/Finish';

const SetupTab = createMaterialTopTabNavigator<SetupTabParamList>();

export const SetupNavigator: React.FC = () => {
  return (
    <SetupPager>
      <SetupTab.Navigator
        tabBar={(props) => <SetupHeader {...props} />}
        swipeEnabled={true}
      >
        <SetupTab.Screen
          name="welcome"
          component={Welcome}
        />
        <SetupTab.Screen
          name="geolocation"
          component={Geolocation}
        />
        <SetupTab.Screen
          name="notification"
          component={Notification}
        />
        <SetupTab.Screen
          name="finish"
          component={Finish}
        />
      </SetupTab.Navigator>
    </SetupPager>
  );
}
