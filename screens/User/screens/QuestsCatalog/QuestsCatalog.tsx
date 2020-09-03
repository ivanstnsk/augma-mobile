import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Quest } from 'types';
import { useQuests } from './hooks';
import { QuestCard } from './components';

const getItemRenderer = (getPressHandler: (id: string) => () => void) => {
  return ({ item }: { item: Quest }): JSX.Element => {
    const onPress = getPressHandler(item.id);

    return (
      <QuestCard
        key={item.id}
        data={item}
        onPress={onPress}
      />
    );
  }
}

export const QuestsCatalog: React.FC = () => {
  const Quests = useQuests();
  const navigation = useNavigation();

  const getPressHandler = React.useCallback((questId: string) => () => {
    navigation.navigate('questStart');
    // console.log('quest', questId);
  }, []);

  const renderItem = getItemRenderer(getPressHandler);

  return (
    <FlatList
      data={Quests.items}
      refreshing={Quests.refreshing}
      renderItem={renderItem}
      onRefresh={Quests.onRefresh}
      style={styles.wrapper}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#1F1F1F',
  },
  container: {
    paddingTop: 11,
    paddingBottom: 19,
    paddingHorizontal: 20,
  }
});
