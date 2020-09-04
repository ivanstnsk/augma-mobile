import * as React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

import * as Assets from 'ui/assets';

type Props = {
  onPress: () => void;
}

export const CloseButton: React.FC<Props> = ({
  onPress,
}) => {
  const insets = useSafeAreaInsets();

  const buttonStyles = [
    styles.button,
    { top: insets.bottom + 24 },
  ];

  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyles}
    >
      <Image
        source={Assets.icons.close}
        resizeMode="contain"
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181818',
  },
  image: {
    width: 20,
    height: 20,
  },
});