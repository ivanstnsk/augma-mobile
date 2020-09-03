import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

export type ButtonLookVariant = 'normal' | 'outline';
export type ButtonLookColor = 'primary' | 'secondary' | 'default' | 'disabled';

export type ButtonProps = {
  label: string;
  variant?: ButtonLookVariant;
  color?: ButtonLookColor;
  disabled?: boolean;
  onPress: () => void;
} & TouchableOpacityProps;

const getColor = (color: ButtonLookColor): string => {
  switch (color) {
    case 'primary': return '#D12727';
    case 'secondary': return '#31A127';
    case 'disabled': return '#3C3C3C';
    case 'default': default: return '#919191';
  }
}

const getStyles = (variant: ButtonLookVariant, color: ButtonLookColor) => {
  const hexColor = getColor(color);

  switch (variant) {
    case 'outline': {
      return {
        button: {
          backgroundColor: 'transparent',
          borderColor: hexColor,
        },
        label: { color: hexColor },
      };
    }
    case 'normal':
    default: {
      return {
        button: {
          backgroundColor: hexColor,
          borderColor: hexColor,
        },
        label: {
          color: color === 'disabled'
            ? '#686868'
            : '#FFFFFF',
        },
      };;
    }
  }
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'normal',
  color = 'default',
  disabled,
  style,
  onPress,
}) => {
  const addStyles = getStyles(variant, color);

  const buttonStyles = [
    styles.button,
    addStyles.button,
    style,
  ];

  const labelStyles = [
    styles.label,
    addStyles.label,
  ];

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={buttonStyles}
    >
      <Text
        numberOfLines={1}
        style={labelStyles}
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
    borderRadius: 8,
    borderWidth: 1,
  },
  label: {
    fontSize: 16,
  }
});