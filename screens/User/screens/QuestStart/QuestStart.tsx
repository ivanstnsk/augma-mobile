import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { CoverWrapper } from 'components/CoverWrapper';
import { Button } from 'components/Button';
import { Map } from 'components/Map';

import { InfoCard } from 'screens/User/components/InfoCard';

import { Title } from './components';

export const QuestStart: React.FC = () => {
  const [mapVisible, setMapVisible] = React.useState(false);
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const buttonStyles = [
    styles.button,
    { marginBottom: 24 + insets.bottom },
  ];

  const handleStartPress = React.useCallback(() => {
    navigation.navigate('questStartTimer');
  }, []);

  React.useEffect(() => {
    setTimeout(() => setMapVisible(true), 1000)
  }, []);

  return (
    <View style={styles.wrapper}>
      <CoverWrapper>
        <Title title="Вакцина" />
        <View style={styles.coverContainer}>
          <View style={styles.infoCardsContainer}>
            <InfoCard
              title="Что нужно сделать?"
              text="Передать курьеру как можно быстрее секретное письмо, которое вы получили на 1 чек-поинте. Оно должно быть в инвентаре"
              iconName="infoQuestion"
            />
            <InfoCard
              title="Ограничения"
              text="Передать курьеру как можно быстрее секретное письмо, которое вы получили на 1 чек-поинте. Оно должно быть в инвентаре"
              iconName="infoLimit"
            />
            <InfoCard
              title="Условия прохождения"
              text="Передать курьеру как можно быстрее секретное письмо, которое вы получили на 1 чек-поинте. Оно должно быть в инвентаре"
              iconName="infoCondition"
            />
          </View>
          <Map
            visible={mapVisible}
            style={styles.mapWrapper}
          />
          <Button
            label="Начать квест"
            variant="normal"
            color="primary"
            onPress={handleStartPress}
            style={buttonStyles}
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
  button: {
    marginHorizontal: 20,
    marginVertical: 32,
  }
});
