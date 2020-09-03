import { StackCardInterpolationProps } from '@react-navigation/stack';

export const headerSecondaryStyles = {
  headerStyle: {
    backgroundColor: '#1F1F1F',
    borderColor: 'rgba(255,255,255,0.05)',
    borderWidth: 0,
  },
  headerTintColor: 'rgba(255,255,255,0.4)',
  headerBackTitle: ' ',
};

export const cardStyleInterpolator = (props: StackCardInterpolationProps) => {
  const { current: { progress } } = props;
  const cardTranslateY = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [500, 0],
    extrapolate: 'clamp',
  });
  return ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 0.5, 0.9, 1],
        outputRange: [0, 0.25, 0.7, 1],
      }),
      transform: [{ translateY: cardTranslateY }],
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.57],
        extrapolate: 'clamp',
      }),
    },
  });
};