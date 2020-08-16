import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackHeaderProps } from '@react-navigation/stack';

type Props = {} & StackHeaderProps;

const prepareTitle = (routeName: string): string => {
  switch (routeName) {
    case 'account': return 'Аккаунт';
    case 'questsAll': return 'Квесты';
    default: return routeName;
  }
}

export const Header: React.FC<Props> = ({
  scene,
}) => {
  const insets = useSafeAreaInsets();
  const wrapperStyles = {
    ...styles.wrapper,
    paddingTop: insets.top,
  };

  return (
    <View style={wrapperStyles}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.titleBack} />
          <Text style={styles.title}>{prepareTitle(scene.route.name)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#1F1F1F',
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
  title: {
    fontSize: 34,
    fontWeight: '500',
    color: '#C62626',
    textTransform: 'capitalize'
  }
});