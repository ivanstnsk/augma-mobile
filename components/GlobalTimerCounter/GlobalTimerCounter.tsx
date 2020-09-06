import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import * as Assets from 'ui/assets';

import { Text } from '../Text';

export type Props = {}

export const GlobalTimerCounter: React.FC<Props> = ({

}) => {
  const insets = useSafeAreaInsets();

  const wrapperStyles = [
    styles.wrapper,
    { top: insets.top + 35 },
  ];

  return (
    <View style={wrapperStyles}>
      <Image
        source={Assets.icons.clock}
        resizeMode="contain"
        style={styles.icon}
      />
      <Text style={styles.text}>13:31</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    right: 20,
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#D12727',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 18,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  text: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.7)',
  }
});