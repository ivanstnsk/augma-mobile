import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { NoScreen } from 'components/NoScreen';

export const QuestPointDetails: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <NoScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#1F1F1F',
  }
});
