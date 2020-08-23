import * as React from 'react';
import { View } from 'react-native';

type Props = {
  width?: number;
  height?: number;
}

export const Spacer: React.FC<Props> = ({
  width,
  height,
}) => {
  const spacerStyles = {
    width: width || 0,
    height: height || 0,
  };

  return (
    <View
      style={spacerStyles}
      accessibilityLabel="view-spacer"
    />
  );
}
