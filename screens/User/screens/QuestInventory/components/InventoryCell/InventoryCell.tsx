import * as React from 'react';
import { StyleSheet, View, TouchableHighlight, Image } from 'react-native';

import * as Assets from 'ui/assets';
import { Models } from 'types/models/models';

type Props = {
  size: number;
  data?: Models.InventoryItem;
  onGetLongPressHandler?: (item: Models.InventoryItem) => () => void;
};

export const InventoryCell: React.FC<Props> = ({
  size,
  data,
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
    type,
  } = data;

  const handleLongPress = onGetLongPressHandler && onGetLongPressHandler(data);

  return (
    <TouchableHighlight
      onLongPress={handleLongPress}
      underlayColor="rgba(255,255,255,0.06)"
      style={buttonStyles}
    >
      <View style={styles.container}>
        {data && (
          <Image
            source={Assets.getInventoryIconByName(type)}
            resizeMode="contain"
            style={styles.icon}
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
  icon: {
    width: 44,
    height: 44,
  }
});
