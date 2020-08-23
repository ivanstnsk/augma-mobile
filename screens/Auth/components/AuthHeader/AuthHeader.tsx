import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

import * as Assets from 'ui/assets';

type Props = {
  title: string;
}

export const AuthHeader: React.FC<Props> = ({
  title,
}) => {
  const frame = useSafeAreaFrame();

  const wrapperStyles = [
    styles.wrapper,
    { height: frame.height / 2.8 },
  ];

  return (
    <View style={wrapperStyles}>
      <Image
        source={Assets.icons.appLogo}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.label}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
  },
  label: {
    fontSize: 24,
    color: 'rgba(255,255,255,0.2)',
    marginTop: 32,
  }
});