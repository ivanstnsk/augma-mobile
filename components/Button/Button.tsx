import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

type ButtonLookVariant = 'normal' | 'outline';

type Props = {
  label: string;
  variant?: ButtonLookVariant;
  onPress: () => void;
}

const getStyles = (variant: ButtonLookVariant) => {
  switch (variant) {
    case 'outline': {
      return {
        button: [
          styles.button,
          {
            backgroundColor: 'transparent',
            borderColor: '#919191',
          },
        ],
        label: [
          styles.label,
          { color: '#919191' },
        ],
      };
    }
    case 'normal': default: return styles;
  }
}

export const Button: React.FC<Props> = ({
  label,
  variant = 'normal',
  onPress,
}) => {
  const preparedStyles = getStyles(variant);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={preparedStyles.button}
    >
      <Text
        numberOfLines={1}
        style={preparedStyles.label}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 'auto',
    maxHeight: 56,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#C62626',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C62626',
  },
  label: {
    fontSize: 16,
    color: '#FFFFFF',
  }
});