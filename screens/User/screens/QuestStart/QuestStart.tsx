import * as React from 'react';
import { StyleSheet, Image, View, Text, Animated, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, CommonActions } from '@react-navigation/native';

import { ScreenWrapper } from '../../../../components/ScreenWrapper';
import { CoverWrapper } from '../../../../components/CoverWrapper';
import { Button } from '../../../../components/Button';
import { TimeCounter } from '../../../../components/TimeCounter';

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
    console.log('start after ', time);
    navigation.dispatch(CommonActions.reset({
      index: 0,
      routes: [
        { name: 'quest' },
      ],
    }));
  }, [navigation]);

  return (
    <ScreenWrapper>
      <Animated.View style={infoContainerStyles}>
        <CoverWrapper>
          <Title title="Вакцина" />
          <Description
            level={3}
            limitation={-1}
            description={{
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
              ],
            }}
          />
        </CoverWrapper>
        <View style={footerContainerStyles}>
          <Button
            label="Начать квест"
            onPress={showGetReady}
          />
        </View>
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
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    width: '100%',
    position: 'absolute',
  },
  footerContainer: {
    width: '100%',
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
  }
});
