import * as React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Models } from 'types/models/models';
import { HeaderBlock } from 'components/HeaderBlock';
import { useQuestActions } from 'store/quest';

import { QuestPointCard } from './components';
import { useQuest } from './hooks';

const getItemRenderer = (progress: number, getPressHandler: (id: number) => () => void) => {
  return ({ item }: { item: Models.QuestPoint }): JSX.Element => {
    const onOpenDetailsPress = getPressHandler(item.id);

    return (
      <QuestPointCard
        key={item.id}
        data={item}
        progress={progress}
        onOpenDetailsPress={onOpenDetailsPress}
      />
    );
  }
}

export const QuestProgress: React.FC = () => {
  const navigation = useNavigation();
  const QuestActions = useQuestActions();
  const Quest = useQuest('testQuest1');
  const progress = Quest.info?.progress || 0;

  // const handleFinishPress = () => {
  //   QuestActions.finish();
  // };

  const getOpenDetailsPressHandler = React.useCallback((pointId: number) => () => {
    navigation.navigate('questPointDetails', { pointId });
  }, []);

  const renderItem = getItemRenderer(
    progress,
    getOpenDetailsPressHandler
  );

  return (
    <View style={styles.wrapper}>
      <HeaderBlock title="Прогресс" />
      <FlatList
        data={Quest.points.items}
        refreshing={Quest.refreshing}
        renderItem={renderItem}
        onRefresh={Quest.onRefresh}
        style={styles.wrapper}
        contentContainerStyle={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#1F1F1F',
  },
  container: {
    flexDirection: 'column',
    alignItems: 'stretch',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  finishButton: {
    width: '100%',
    marginTop: 24,
  }
});
