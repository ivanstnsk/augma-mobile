import * as React from 'react';
import { StyleSheet, Text as RNText, TextProps } from 'react-native';

type Props = {
  children: string | number | React.ReactElement | React.ReactElement[];
} & TextProps;

export const Text: React.FC<Props> = ({
  children,
  style,
  ...props
}) => {
  const textStyles = [
    styles.text,
    style,
  ];

  return (
      <RNText
        style={textStyles}
        {...props}
      >
        {children}
      </RNText>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
  }
});