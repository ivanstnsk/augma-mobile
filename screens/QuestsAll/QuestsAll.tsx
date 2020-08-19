import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ScreenWrapper } from '../../components/ScreenWrapper';

import { QuestCard } from './components';

const QUESTS: QuestInfo[] = [
  {
    id: 'vac1',
    name: 'Вакцина',
    description: {
      goal: 'Передать данные для создания вакцины координатору. Но будь осторожен: приспешники корпорации тоже ведут охоту за данными! Решай с умом кому довериться а кому нет.',
      points: [
        {
          id: 'check1',
          name: 'Тревожное сообщение'
        },
        {
          id: 'check2',
          name: 'Ключ к координатам'
        },
        {
          id: 'check3',
          name: 'Союзники и враги'
        },
        {
          id: 'check4',
          name: 'Выбор'
        },
      ]
    },
    level: 1,
    limitation: -1,
  },
];

export const QuestsAll: React.FC = () => {
  const navigation = useNavigation();

  const handlePress = React.useCallback(() => {
    navigation.navigate('questStart');
  }, []);

  return (
    <ScreenWrapper>
      <ScrollView
        style={styles.wrapper}
        contentContainerStyle={styles.container}
      >
        {QUESTS.map((item) => (
          <QuestCard
            key={item.id}
            data={item}
            onPress={handlePress}
          />
        ))}
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    paddingTop: 11,
    paddingBottom: 19,
    paddingHorizontal: 20,
  }
});
