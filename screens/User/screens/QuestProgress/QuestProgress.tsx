import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from 'components/Button';
import { useQuestActions } from 'store/quest';

export const QuestProgress: React.FC = () => {
  const QuestActions = useQuestActions();

  const handleFinishPress = () => {
    QuestActions.finish();
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.infoContainer}>
      </View>
      <Button
        onPress={handleFinishPress}
        label="Завершить квест"
        variant="outline"
        color="primary"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#1F1F1F',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 19,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
