import * as React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import { InventoryCell } from './components';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const CELL_SIZE = (SCREEN_WIDTH - 70) / 4;
const CELLS_COUNT = 20;

const renderCells = () => {
  const cells = [];

  for (let i = 0; i < CELLS_COUNT; i += 1) {
    cells.push(
      <InventoryCell
        size={CELL_SIZE}
      />
    );
  }

  return cells;
}

export const QuestInventory: React.FC = () => {
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
