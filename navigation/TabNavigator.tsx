import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Header } from '../components/Header';
import { BottomTabs } from '../components/BottomTabs';
import {QuestsAll} from '../screens/QuestsAll';
import {Account} from '../screens/Account';

import { BottomTabParamList, QuestsParamList, AccountParamList } from './types';

const QuestsStack = createStackNavigator<QuestsParamList>();

const QuestsNavigator: React.FC = () => {
  return (
    <QuestsStack.Navigator>
      <QuestsStack.Screen
        name="questsAll"
        component={QuestsAll}
        options={{
          header: Header
        }}
      />
    </QuestsStack.Navigator>
  );
}

const AccountStack = createStackNavigator<AccountParamList>();

const AccountNavigator: React.FC = () => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="account"
        component={Account}
        options={{
          header: Header
        }}
      />
    </AccountStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export const TabNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="quests"
      tabBar={(props) => <BottomTabs {...props} />}
    >
      <BottomTab.Screen
        name="quests"
        component={QuestsNavigator}
      />
      <BottomTab.Screen
        name="account"
        component={AccountNavigator}
      />
    </BottomTab.Navigator>
  );
}