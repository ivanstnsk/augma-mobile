import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CoverWrapper } from 'components/CoverWrapper';
import { Map } from 'components/Map';
import { InfoCard } from 'screens/User/components/InfoCard';

export const QuestPointDetails: React.FC = () => {
  const navigation = useNavigation();
  const [mapVisible, setMapVisible] = React.useState(false);

  const handleMapPress = React.useCallback(() => {
    navigation.navigate('questMap');
  }, []);

  React.useEffect(() => {
    setTimeout(() => setMapVisible(true), 1000)
  }, []);

  return (
    <View style={styles.wrapper}>
      <CoverWrapper>
        {null}
        <View style={styles.coverContainer}>
          <View style={styles.infoCardsContainer}>
            <InfoCard
              title="Что нужно сделать?"
              text="Передать курьеру как можно быстрее секретное письмо, которое вы получили на 1 чек-поинте. Оно должно быть в инвентаре"
              iconName="infoQuestion"
            />
            <InfoCard
              title="Ограничения"
              text="Вы не ограничены временем, но есть шанс 60% что приспешники Корпорации начнут штурм 3 чек-поинта в течение 15-30 минут."
              iconName="infoLimit"
            />
            <InfoCard
              title="Условия прохождения"
              text="Передача секретного письма. Оно должно находиться в вашем инвентаре"
              iconName="infoCondition"
            />
          </View>
          <Map
            visible={mapVisible}
            readonly
            onPress={handleMapPress}
            style={styles.mapWrapper}
          />
        </View>
      </CoverWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#1F1F1F',
  },
  coverContainer: {
    flex: 1,
  },
  mapWrapper: {
    width: '100%',
    height: 375,
  },
  infoCardsContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginHorizontal: 20,
    marginVertical: 8,
  },
});
