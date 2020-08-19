import * as React from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';

type Props = {
  fromTime: number;
  onDidFinish: (time: number) => void;
}

export const TimeCounter: React.FC<Props> = ({
  fromTime,
  onDidFinish,
}) => {
  const [time, setTime] = React.useState(-Infinity);
  const charScale = React.useRef(new Animated.Value(1)).current;
  const charOpacity = React.useRef(new Animated.Value(1)).current;

  const animateNextChar = (time: number) => {
    charScale.setValue(1);
    charOpacity.setValue(1);
    Animated.parallel([
      Animated.timing(charScale, {
        toValue: 2,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(charOpacity, {
        toValue: 0,
        delay: 300,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => setTime(time));
  }

  React.useEffect(() => {
    if (time > 0) {
      animateNextChar(time - 1);
    } else if (time === 0) {
      onDidFinish(fromTime);
    }
  }, [time]);

  React.useEffect(() => {
    setTimeout(() => setTime(fromTime), 1000);
  }, [fromTime]);

  const charContainerStyles = [
    styles.infoContainer,
    {
      opacity: charOpacity,
      transform: [
        { scaleX: charScale },
        { scaleY: charScale },
      ],
    }
  ];

  return (
    <View style={styles.wrapper}>
      <Animated.View style={charContainerStyles}>
        {time > 0 ? (
          <Text style={styles.char}>{time}</Text>
        ) : null}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  char: {
    fontSize: 100,
    color: '#fff',
  },
  infoContainer: {},
});