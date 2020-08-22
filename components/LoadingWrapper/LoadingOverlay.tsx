import * as React from 'react';
import { StyleSheet, Animated, Image } from 'react-native';

import * as Assets from 'ui/assets';

const ANIMATION_TIME = 300;
const ANIMATION_ROTATE_TIME = 2000;

type Props = {
  visible: boolean;
}

export const LoadingOverlay: React.FC<Props> = ({
  visible,
}) => {
  const [animating, setAnimating] = React.useState(false);
  const opacity = React.useRef(new Animated.Value(0)).current;
  const logoEyeOpacity = React.useRef(new Animated.Value(0.2)).current;
  const logoWrapperRotate = React.useRef(new Animated.Value(0)).current;
  const logoWrapperRotateDeg = logoWrapperRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const wrapperStyles = [
    styles.wrapper,
    { opacity },
  ];

  const logoEyeStyles = [
    styles.logoEye,
    { opacity: logoEyeOpacity }
  ];

  const logoWrapperStyles = [
    styles.logoWrapper,
    { transform: [{ rotate: logoWrapperRotateDeg }]}
  ]

  const pointerEvents = !visible && !animating ? 'none' : 'auto';

  const animateShown = React.useCallback((show: boolean) => {
    setAnimating(true);

    Animated.timing(opacity, {
      toValue: show ? 1 : 0,
      duration: ANIMATION_TIME,
      useNativeDriver: true,
    }).start(() => setAnimating(false));
  }, [Animated, setAnimating]);

  React.useEffect(() => {
    animateShown(visible);
  }, [visible]);

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(logoWrapperRotate, {
          toValue: 1,
          duration: ANIMATION_ROTATE_TIME,
          useNativeDriver: true,
        }),
        Animated.timing(logoWrapperRotate, {
          toValue: 0,
          duration: ANIMATION_ROTATE_TIME,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View
      style={wrapperStyles}
      pointerEvents={pointerEvents}
    >
      <Animated.View style={logoWrapperStyles}>
        <Image
          style={styles.logoWrapper}
          source={Assets.icons.logoWrapper}
          resizeMode="contain"
        />
      </Animated.View>
      <Image
        style={styles.logoEye}
        source={Assets.icons.logoEye}
        resizeMode="contain"
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoWrapper: {
    width: 100,
    height: 100,
  },
  logoEye: {
    width: 84,
    height: 84,
    position: 'absolute',
  }
});