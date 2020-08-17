import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ScreenWrapper } from '../../components/ScreenWrapper';
import { NoScreen } from '../../components/NoScreen';

import { QuestCard } from './components';

const QUESTS = [
  { name: 'Сокровище древних пиратов', level: 4 },
  { name: 'Захват портала', level: 2 },
  { name: 'Гонец', level: 4 },
  { name: 'Дело древней давности', level: 7 },
];

export const QuestsAll: React.FC = () => {
  const navigation = useNavigation();

  const handlePress = React.useCallback(() => {
    navigation.navigate('quest');
  }, []);

  return (
    <ScreenWrapper>
      <ScrollView
        style={styles.wrapper}
        contentContainerStyle={styles.container}
      >
        {QUESTS.map(({ name, level }) => (
          <QuestCard
            label={name}
            level={level}
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
