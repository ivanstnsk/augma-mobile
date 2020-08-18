import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

type Props = {
  label: string;
  onPress: () => void;
}

export const Button: React.FC<Props> = ({
  label,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
    >
      <Text
        numberOfLines={1}
        style={styles.label}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#C62626',
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    color: '#FFFFFF',
  }
});