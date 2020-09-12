import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, TouchableOpacityProps } from 'react-native';

import * as Assets from 'ui/assets';

export type ButtonProps = {
  disabled?: boolean;
  onPress: () => void;
} & TouchableOpacityProps;

export const PageMenuButton: React.FC<ButtonProps> = ({
  disabled,
  style,
  onPress,
}) => {
  const buttonStyles = [
    styles.button,
    style,
  ];

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={buttonStyles}
    >
      <Image
        source={Assets.icons.pageMenu}
        resizeMode="contain"
        style={styles.icon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
});