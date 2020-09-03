import * as React from 'react';
import { StyleSheet, Image, View, Text, Animated, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, CommonActions } from '@react-navigation/native';

import { ScreenWrapper } from 'components/ScreenWrapper';
import { CoverWrapper } from 'components/CoverWrapper';
import { Button } from 'components/Button';
import { TimeCounter } from 'components/TimeCounter';
import { Map } from 'components/Map';

import { InfoCard } from 'screens/User/components/InfoCard';

import { Title, Description } from './components';

const screen = Dimensions.get('screen');

export const QuestStart: React.FC = () => {
  const [questStarting, setQuestStarting] = React.useState(false);
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const containerHeight = screen.height;

  const infoContainerHeight = React.useRef(new Animated.Value(0)).current;
  const getReadyContainerHeight = React.useRef(new Animated.Value(containerHeight)).current;
  const getReadyContainerOpacity = React.useRef(new Animated.Value(0)).current;

  const footerContainerStyles = [
    styles.footerContainer,
    { marginBottom: insets.bottom }
  ];

  const infoContainerStyles = [
    styles.infoContainer,
    {
      height: screen.height,
      transform: [ { translateY: infoContainerHeight } ],
    }
  ];

  const getReadyContainerStyles = [
    styles.infoContainer,
    {
      height: screen.height,
      opacity: getReadyContainerOpacity,
      transform: [ { translateY: getReadyContainerHeight } ],
    }
  ];

  const buttonStyles = [
    styles.button,
    { marginBottom: 32 + insets.bottom },
  ];

  const showGetReady = React.useCallback(() => {
    setQuestStarting(true);
    Animated.parallel([
      Animated.timing(infoContainerHeight, {
        toValue: -containerHeight,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.timing(getReadyContainerHeight, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(getReadyContainerOpacity, {
          toValue: 1,
          duration: 300,
          delay: 300,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [Animated]);

  const hideGetReady = React.useCallback(() => {
    Animated.parallel([
      Animated.sequence([
        Animated.timing(getReadyContainerOpacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.parallel([
          Animated.timing(infoContainerHeight, {
            toValue: 0,
            duration: 300,
            delay: 300,
            useNativeDriver: true,
          }),
          Animated.timing(getReadyContainerHeight, {
            toValue: containerHeight,
            duration: 300,
            delay: 300,
            useNativeDriver: true,
          }),
        ]),
      ]),
    ]).start(() => setQuestStarting(false));
  }, [Animated]);

  const handleStart = React.useCallback((time: number) => {
    navigation.dispatch(CommonActions.reset({
      index: 0,
      routes: [
        { name: 'quest' },
      ],
    }));
  }, [navigation]);

  return (
    <View style={styles.wrapper}>
      <Animated.View style={infoContainerStyles}>
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
            <Map style={styles.mapWrapper} />
            <Button
              label="Начать квест"
              variant="normal"
              color="primary"
              onPress={showGetReady}
              style={buttonStyles}
            />
          </View>
        </CoverWrapper>
      </Animated.View>
      <Animated.View style={getReadyContainerStyles}>
        <View style={styles.getReadyInner}>
          <Image
            source={require('../../../../assets/images/quest-1-cover.png')}
            style={styles.bgImage}
            resizeMode="cover"
          />
          {questStarting && (
            <>
            <Text style={styles.label}>Приготовьтесь. Старт через</Text>
            <TimeCounter
              fromTime={5}
              onDidFinish={handleStart}
            />
            </>
          )}
        </View>
        <View style={footerContainerStyles}>
          <Button
            label="Отменить старт"
            onPress={hideGetReady}
          />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#1F1F1F',
  },
  infoContainer: {
    width: '100%',
    position: 'absolute',
  },
  coverContainer: {
    flex: 1,
  },
  mapWrapper: {
    width: '100%',
    height: 375,
  },
  footerContainer: {
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  getReadyInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#C62626',
  },
  bgImage: {
    height: '100%',
    ...StyleSheet.absoluteFillObject,
    opacity: 0.3,
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
