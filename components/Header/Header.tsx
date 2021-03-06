import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackHeaderProps } from '@react-navigation/stack';

import * as Assets from 'ui/assets';

type Props = {} & StackHeaderProps;

const prepareTitle = (routeName: string): string => {
  switch (routeName) {
    case 'account': return 'Аккаунт';
    case 'questsCatalog': return 'Квесты';
    case 'progress': return 'Прогресс';
    case 'messages': return 'Сообщения';
    case 'inventory': return 'Инвентарь';
    case 'map': return 'Карта';
    default: return routeName; 
  }
}

export const Header: React.FC<Props> = ({
  scene,
  // navigation,
  // styleInterpolator,
}) => {
  const insets = useSafeAreaInsets();
  const canGoBack = false; // navigation.canGoBack();

  const wrapperStyles = {
    ...styles.wrapper,
    paddingTop: insets.top + 24,
  };
  const titleStyles = canGoBack
    ? [styles.title, styles.titleSecondary]
    : styles.title;
  const titleBackStyles = canGoBack
    ? [styles.titleBack, styles.titleBackSecondary]
    : styles.titleBack;

  return (
    <View style={wrapperStyles}>
      <View style={styles.container}>
        {canGoBack && (
          <Image
            source={Assets.icons.back}
            resizeMode="contain"
            style={styles.iconBack}
          />
        )}
        <View style={styles.titleContainer}>
          <View style={titleBackStyles} />
          <Text style={titleStyles} numberOfLines={1}>
            {prepareTitle(scene.route.name)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#1F1F1F',
    paddingBottom: 8,
  },
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titleContainer: {
    position: 'relative',
  },
  titleBack: {
    ...StyleSheet.absoluteFillObject,
    top: 'auto',
    bottom: 0,
    height: 16,
    backgroundColor: 'rgba(198, 38, 38, 0.1)',
    opacity: 10,
  },
  titleBackSecondary: {
    height: 10,
  },
  title: {
    fontSize: 34,
    fontWeight: '500',
    color: '#C62626',
    textTransform: 'capitalize'
  },
  titleSecondary: {
    fontSize: 24,
  },
  iconBack: {
    width: 18,
    height: 18,
    marginRight: 16,
  }
});