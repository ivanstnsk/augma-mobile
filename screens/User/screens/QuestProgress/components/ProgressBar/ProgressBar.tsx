import * as React from 'react';
import { StyleSheet, View, Animated, Easing } from 'react-native';

import { Text } from 'components/Text';

type Props = {
  progress: number;
}

const ANIMATION_TIME = 400;

export const ProgressBar: React.FC<Props> = ({
  progress,
}) => {
  const width = React.useRef(new Animated.Value(0)).current;

  const progressStyles = [
    styles.progress,
    { width },
  ];

  const animate = React.useCallback(() => {
    Animated.timing(width, {
      toValue: 166,
      duration: ANIMATION_TIME,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  }, []);

  React.useEffect(() => {
    setTimeout(animate, 1000);
  }, [progress]);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{`${progress * 100} %`}</Text>
      <View style={styles.progressContainer}>
        <Animated.View style={progressStyles} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  progressContainer: {
    width: '100%',
    height: 8,
    backgroundColor: '#262626',
    borderRadius: 4,
  },
  progress: {
    height: 8,
    backgroundColor: '#B32525',
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 4,
  }
});