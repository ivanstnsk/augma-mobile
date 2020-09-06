import * as React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';

import { Models } from 'types/models/models';

import { InventoryItem } from '../InventoryItem';

type Props = {
  size: number;
  data?: Models.InventoryItem;
  onGetPressHandler?: (item: Models.InventoryItem) => () => void;
  onGetLongPressHandler?: (item: Models.InventoryItem) => () => void;
};

export const InventoryCell: React.FC<Props> = ({
  size,
  data,
  onGetPressHandler,
  onGetLongPressHandler,
}) => {
  const buttonStyles = [
    styles.button,
    { width: size, height: size },
  ];

  if (!data) {
    return (
      <TouchableHighlight style={buttonStyles}>
        <View style={styles.container} />
      </TouchableHighlight>
    );
  }

  const {
    id,
    type,
    disabled,
  } = data;

  const containerStyles = [
    styles.container,
    { backgroundColor: disabled
      ? 'rgba(255,255,255,0.02)'
      : 'rgba(255,255,255,0.07)',
    },
  ];

  const underlayColor = disabled ? 'transparent' : 'rgba(255,255,255,0.06)';
  const handleLongPress = onGetLongPressHandler && onGetLongPressHandler(data);
  const handlePress = (!disabled && onGetPressHandler)
    ? onGetPressHandler(data)
    : () => {};

  return (
    <TouchableHighlight
      key={`inventoryCell-${id}`}
      onPress={handlePress}
      onLongPress={handleLongPress}
      underlayColor={underlayColor}
      style={buttonStyles}
    >
      <View style={containerStyles}>
        {data && (
          <InventoryItem
            id={id}
            size={size / 2}
            type={type}
            disabled={disabled}
          />
        )}
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.02)',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
