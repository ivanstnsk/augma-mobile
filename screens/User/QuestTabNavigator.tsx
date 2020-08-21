import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Header } from '../../components/Header';

import {
  QuestBottomTabParamList,
  QuestProgressParamList,
  QuestMessagesParamList,
  QuestInventoryParamList,
  QuestMapParamList,
} from '../types';

import { QuestProgress } from './screens/QuestProgress';
import { QuestMessages } from './screens/QuestMessages';
import { QuestInventory } from './screens/QuestInventory';
import { QuestMap } from './screens/QuestMap';
import { QuestBottomTabs } from './components/QuestBottomTabs';

const QuestProgressStack = createStackNavigator<QuestProgressParamList>();

const QuestProgressNavigator: React.FC = () => {
  return (
    <QuestProgressStack.Navigator>
      <QuestProgressStack.Screen
        name="progress"
        component={QuestProgress}
        options={{
          header: Header
        }}
      />
    </QuestProgressStack.Navigator>
  );
}

const QuestMessagesStack = createStackNavigator<QuestMessagesParamList>();

const QuestMessagesNavigator: React.FC = () => {
  return (
    <QuestMessagesStack.Navigator>
      <QuestMessagesStack.Screen
        name="messages"
        component={QuestMessages}
        options={{
          header: Header
        }}
      />
    </QuestMessagesStack.Navigator>
  );
}

const QuestInventoryStack = createStackNavigator<QuestInventoryParamList>();

const QuestInventoryNavigator: React.FC = () => {
  return (
    <QuestInventoryStack.Navigator>
      <QuestInventoryStack.Screen
        name="inventory"
        component={QuestInventory}
        options={{
          header: Header
        }}
      />
    </QuestInventoryStack.Navigator>
  );
}

const QuestMapStack = createStackNavigator<QuestMapParamList>();

const QuestMapNavigator: React.FC = () => {
  return (
    <QuestMapStack.Navigator>
      <QuestMapStack.Screen
        name="map"
        component={QuestMap}
        options={{
          header: Header
        }}
      />
    </QuestMapStack.Navigator>
  );
}

const QuestBottomTab = createBottomTabNavigator<QuestBottomTabParamList>();

export const QuestTabNavigator: React.FC = () => {
  return (
    <QuestBottomTab.Navigator
      initialRouteName="questProgress"
      tabBar={(props) => <QuestBottomTabs {...props} />}
    >
      <QuestBottomTab.Screen
        name="questProgress"
        component={QuestProgressNavigator}
      />
      <QuestBottomTab.Screen
        name="questMessages"
        component={QuestMessagesNavigator}
      />
      <QuestBottomTab.Screen
        name="questInventory"
        component={QuestInventoryNavigator}
      />
      <QuestBottomTab.Screen
        name="questMap"
        component={QuestMapNavigator}
      />
    </QuestBottomTab.Navigator>
  );
}