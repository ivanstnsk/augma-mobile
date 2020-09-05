import * as React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';

type Props = {
  size: number;
  onPress?: () => void;
};

export const InventoryCell: React.FC<Props> = ({
  size,
  onPress,
}) => {
  const buttonStyles = [
    styles.button,
    { width: size, height: size },
  ];

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor="rgba(255,255,255,0.06)"
      style={buttonStyles}
    >
      <View style={styles.container}></View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(255,255,255,0.02)',
    borderRadius: 12,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  container: {
    flex: 1,
  }
});
