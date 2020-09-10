import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import { Button } from 'components/Button';
import { useQuestActions } from 'store/quest';

import { QuestPointCard } from './components';

export const QuestProgress: React.FC = () => {
  const QuestActions = useQuestActions();

  const handleFinishPress = () => {
    QuestActions.finish();
  }

  return (
    <View style={styles.wrapper}>
      <ScrollView
        contentContainerStyle={styles.infoContainer}
      >
        <QuestPointCard
          data={{
            id: 1,
            title: 'test',
            description: 'test',
            type: 'passed'
          }}
        />
        <QuestPointCard
          data={{
            id: 2,
            title: 'test',
            description: 'test',
            type: 'active'
          }}
        />
        <QuestPointCard
          data={{
            id: 3,
            title: 'test',
            description: 'test',
            type: 'locked'
          }}
        />
        <QuestPointCard
          data={{
            id: 4,
            title: 'test',
            description: 'test',
            type: 'locked'
          }}
        />
        <QuestPointCard
          data={{
            id: 5,
            title: 'test',
            description: 'test',
            type: 'locked'
          }}
        />
        <QuestPointCard
          data={{
            id: 6,
            title: 'test',
            description: 'test',
            type: 'locked'
          }}
        />
      </ScrollView>
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
    flexDirection: 'column',
    alignItems: 'center',
  },
});
