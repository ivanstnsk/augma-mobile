import * as React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  children: React.ReactElement | React.ReactElement[];
  disableBottomInset?: boolean;
  onOverlayPress?: () => void;
};

export const ModalWrapper: React.FC<Props> = ({
  children,
  disableBottomInset,
  onOverlayPress,
}) => {
  const insets = useSafeAreaInsets();

  const bottomInset = disableBottomInset ? 0 : insets.bottom;

  const containerStyles = [
    styles.container,
    { paddingBottom: bottomInset + 24 }
  ];

  return (
    <View style={styles.wrapper}>
      <TouchableWithoutFeedback onPress={onOverlayPress}>
        <View style={styles.overlayContainer} />
      </TouchableWithoutFeedback>
      <View style={containerStyles}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    backgroundColor: 'transparent',
  },
  overlayContainer: {
    flex: 1,
  },
  container: {
    paddingVertical: 24,
    backgroundColor: '#1F1F1F',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
});