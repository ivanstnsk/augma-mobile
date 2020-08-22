import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import * as Assets from 'ui/assets';

type Props = {} & BottomTabBarProps;

type RouteParams = {
  key: string;
  name: string;
  params?: object | undefined;
}

const prepareLabel = (routeName: string): string => {
  switch (routeName) {
    case 'questProgress': return 'Прогресс';
    case 'questMessages': return 'Сообщения';
    case 'questInventory': return 'Инвентарь';
    case 'questMap': return 'Карта';
    default: return routeName;
  }
}

const getTabRenderer = (getPressHandler: (routeName: string) => () => void, active: boolean) => {
  return (route: RouteParams): JSX.Element => {
    const { key, name } = route;
    // console.log(key, activeTabKey);
    // const active = activeTabKey === key;
    const onPress = getPressHandler(name);
    const labelStyles = active
      ? [styles.tabLabel, styles.tabLabelActive]
      : styles.tabLabel;
    const iconName = active ? `${name}Active` : name;
  
    return (
      <TouchableOpacity
        key={key}
        onPress={onPress}
        style={styles.tabButton}
      >
        <Image
          source={Assets.getIconByName(iconName)}
          resizeMode="contain"
          style={styles.tabIcon}
        />
        <Text style={labelStyles}>{prepareLabel(name)}</Text>
      </TouchableOpacity>
    );
  }
}

export const QuestBottomTabs: React.FC<Props> = ({
  state,
  navigation,
}) => {
  const insets = useSafeAreaInsets();
  const wrapperStyles = {
    ...styles.wrapper,
    paddingBottom: insets.bottom,
  };

  const getTabPressHandler = React.useCallback((routeName: string) => () => {
    navigation.navigate(routeName);
  }, []);

  return (
    <View style={wrapperStyles}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const active = state.index === index;
          const renderTab = getTabRenderer(getTabPressHandler, active);

          return renderTab(route);
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#181818',
    borderTopColor: 'rgba(255,255,255,0.1)',
    borderTopWidth: 1,
  },
  container: {
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  tabButton: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: 32,
    height: 32,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '400',
    color: '#fff',
    textTransform: 'capitalize',
    marginTop: 8,
  },
  tabLabelActive: {
    color: '#D12727',
  }
});