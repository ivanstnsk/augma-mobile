import * as React from 'react';
import { StyleSheet, Animated, View } from 'react-native';
import { Marker, LatLng } from 'react-native-maps';

const ANIMATION_TIME = 400;

type Props = {
  center: LatLng;
  size?: number;
};

export const HighlightZoneMarker: React.FC<Props> = ({
  center,
  size = 60,
}) => {
  const opacity = React.useRef(new Animated.Value(0)).current;
  const scale = React.useRef(new Animated.Value(1)).current;
  
  const wrapperStyles = [
    styles.wrapper,
    {
      width: size,
      height: size,
    },
  ];

  const circleStyles = [
    styles.circle,
    {
      opacity, transform: [{ scale }],
      width: size,
      height: size,
      borderRadius: size,
    },
  ];

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 0.3,
            duration: ANIMATION_TIME,
            useNativeDriver: true,
          }),
          Animated.timing(scale, {
            toValue: 2,
            duration: ANIMATION_TIME,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 0,
            duration: ANIMATION_TIME,
            useNativeDriver: true,
          }),
          Animated.timing(scale, {
            toValue: 1,
            duration: ANIMATION_TIME,
            useNativeDriver: true,
          }),
        ])
      ])
    ).start();
  }, []);

  return (
    <Marker coordinate={center}>
      <View style={wrapperStyles}>
        <Animated.View
          style={circleStyles}
        >
        </Animated.View>
      </View>
    </Marker>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: 'red',
  },
});