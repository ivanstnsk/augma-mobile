import * as React from 'react';
import { StyleSheet, Text as RNText, TextProps } from 'react-native';

type Props = {
  children: string | React.ReactElement | React.ReactElement[];
} & TextProps;

export const Text: React.FC<Props> = ({
  children,
  ...props
}) => {
  return (
      <RNText
        style={styles.text}
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