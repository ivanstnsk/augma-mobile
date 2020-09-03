import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { ScreenWrapper } from 'components/ScreenWrapper';
import { Map } from 'components/Map';

export const QuestMap: React.FC = () => {
  return (
    <ScreenWrapper>
      <View style={styles.wrapper}>
        <Map
          visible
          style={styles.map}
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  map: {
    flex: 1,
  }
});
