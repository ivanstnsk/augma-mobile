import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { HeaderBlock } from 'components/HeaderBlock';
import { Button } from 'components/Button';
import { useQuestActions } from 'store/quest';

import { QuestPointCard, ProgressBar } from './components';

export const QuestProgress: React.FC = () => {
  const navigation = useNavigation();
  const QuestActions = useQuestActions();

  const handleFinishPress = () => {
    QuestActions.finish();
  };

  const getOpenDetailsPressHandler = React.useCallback((pointId: number) => () => {
    navigation.navigate('questPointDetails');
  }, []);

  return (
    <View style={styles.wrapper}>
      <HeaderBlock title="Прогресс" />
      <ScrollView
        contentContainerStyle={styles.infoContainer}
      >
        <QuestPointCard
          data={{
            id: 1,
            title: 'Передача данных',
            description: 'Курьер ждет тебя на Южном вокзале. Но будь осторожен, вчера был крупный слив данных так что тебе придется хорошенько постараться если ты не хочешь попасть в ситуацию когда даже мы не сможем помочь тебе',
            type: 'passed'
          }}
          onOpenDetailsPress={getOpenDetailsPressHandler(1)}
        />
        <ProgressBar progress={0.3} />
        <QuestPointCard
          data={{
            id: 2,
            title: 'Передача данных',
            description: 'Курьер ждет тебя на Южном вокзале. Но будь осторожен, вчера был крупный слив данных так что тебе придется хорошенько постараться если ты не хочешь попасть в ситуацию когда даже мы не сможем помочь тебе',
            type: 'active'
          }}
          onOpenDetailsPress={getOpenDetailsPressHandler(1)}
        />
        <QuestPointCard
          data={{
            id: 3,
            title: 'Передача данных',
            description: 'Курьер ждет тебя на Южном вокзале. Но будь осторожен, вчера был крупный слив данных так что тебе придется хорошенько постараться если ты не хочешь попасть в ситуацию когда даже мы не сможем помочь тебе',
            type: 'locked'
          }}
          onOpenDetailsPress={getOpenDetailsPressHandler(1)}
        />
        <QuestPointCard
          data={{
            id: 4,
            title: 'Передача данных',
            description: 'Курьер ждет тебя на Южном вокзале. Но будь осторожен, вчера был крупный слив данных так что тебе придется хорошенько постараться если ты не хочешь попасть в ситуацию когда даже мы не сможем помочь тебе',
            type: 'locked'
          }}
          onOpenDetailsPress={getOpenDetailsPressHandler(1)}
        />
        <QuestPointCard
          data={{
            id: 5,
            title: 'Передача данных',
            description: 'Курьер ждет тебя на Южном вокзале. Но будь осторожен, вчера был крупный слив данных так что тебе придется хорошенько постараться если ты не хочешь попасть в ситуацию когда даже мы не сможем помочь тебе',
            type: 'locked'
          }}
          onOpenDetailsPress={getOpenDetailsPressHandler(1)}
        />
        <QuestPointCard
          data={{
            id: 6,
            title: 'Передача данных',
            description: 'Курьер ждет тебя на Южном вокзале. Но будь осторожен, вчера был крупный слив данных так что тебе придется хорошенько постараться если ты не хочешь попасть в ситуацию когда даже мы не сможем помочь тебе',
            type: 'locked'
          }}
          onOpenDetailsPress={getOpenDetailsPressHandler(1)}
        />
        <Button
          onPress={handleFinishPress}
          label="Завершить квест"
          variant="outline"
          color="primary"
          style={styles.finishButton}
        />
      </ScrollView>
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
  },
  infoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  finishButton: {
    width: '100%',
    marginTop: 24,
  }
});
