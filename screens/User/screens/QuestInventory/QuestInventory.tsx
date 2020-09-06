import * as React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { InventoryCell } from 'components/Inventory';
import { Models } from 'types/models/models';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const CELL_SIZE = (SCREEN_WIDTH - 70) / 4;
const CELLS_COUNT = 20;

const INVENTORY: Models.Inventory = {
  items: [
    {
      id: 'item1',
      type: 'file',
      title: 'Секретные данные',
      description: 'Эти данные нужно передать курьеру для успешного проходждения этапа квеста',
      disabled: false,
    },
    {
      id: 'item2',
      type: 'file-locked',
      title: 'Зашифрованные данные',
      description: 'Эти данные зашифрованы и требуют расшифровки. Далее их нужно передать курьеру для успешного проходждения этапа квеста',
      disabled: false,
    },
    {
      id: 'item3',
      type: 'file',
      title: 'Зашифрованные данные',
      description: 'Эти данные зашифрованы и требуют расшифровки. Далее их нужно передать курьеру для успешного проходждения этапа квеста',
      disabled: true,
    },
    {
      id: 'item4',
      type: 'file-locked',
      title: 'Зашифрованные данные',
      description: 'Эти данные зашифрованы и требуют расшифровки. Далее их нужно передать курьеру для успешного проходждения этапа квеста',
      disabled: true,
    },
  ],
}

const getCellsRenderer = (
  getItemPressHandler: (item: Models.InventoryItem) => () => void,
  getItemInfoPressHandler: (item: Models.InventoryItem) => () => void,
) => {
  return () => {
    const cells = [];

    for (let i = 0; i < CELLS_COUNT; i += 1) {
      let props = {};
      if (i < INVENTORY.items.length) {
        const data = INVENTORY.items[i];
        props = {
          data,
          onGetPressHandler: getItemPressHandler,
          onGetLongPressHandler: getItemInfoPressHandler,
        };
      }

      cells.push(
        <InventoryCell
          key={`inventoryCellWrapper-${i}`}
          size={CELL_SIZE}
          {...props}
        />
      );
    }

    return cells;
  }
}

export const QuestInventory: React.FC = () => {
  const navigation = useNavigation();

  const getItemInfoPressHandler = React.useCallback((item: Models.InventoryItem) => () => {
    navigation.navigate('inventoryItemInfo', { data: item });
  }, []);

  const getItemPressHandler = React.useCallback((item: Models.InventoryItem) => () => {
    navigation.navigate('inventoryItemApply', { data: item });
  }, []);

  const renderCells = getCellsRenderer(
    getItemPressHandler,
    getItemInfoPressHandler,
  );

  return (
    <View style={styles.wrapper}>
      {renderCells()}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    paddingHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
