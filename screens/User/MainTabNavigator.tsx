import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Header } from 'components/Header';
import { BottomTabParamList, QuestsParamList, AccountParamList } from 'screens/types';

import { QuestsCatalog } from './screens/QuestsCatalog';
import { Account } from './screens/Account';
import { MainBottomTabs } from './components/MainBottomTabs';

const QuestsStack = createStackNavigator<QuestsParamList>();

const QuestsNavigator: React.FC = () => {
  return (
    <QuestsStack.Navigator>
      <QuestsStack.Screen
        name="questsCatalog"
        component={QuestsCatalog}
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

const MainBottomTab = createBottomTabNavigator<BottomTabParamList>();

export const MainTabNavigator: React.FC = () => {
  return (
    <MainBottomTab.Navigator
      initialRouteName="quests"
      tabBar={(props) => <MainBottomTabs {...props} />}
    >
      <MainBottomTab.Screen
        name="quests"
        component={QuestsNavigator}
      />
      <MainBottomTab.Screen
        name="account"
        component={AccountNavigator}
      />
    </MainBottomTab.Navigator>
  );
}