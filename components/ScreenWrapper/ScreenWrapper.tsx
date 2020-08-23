import * as React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { useSafeAreaInsets, useSafeAreaFrame } from 'react-native-safe-area-context';

type Props = {
  children: React.ReactElement | React.ReactElement[];
  fullscreen?: boolean;
  disableInsets?: boolean;
  disableTopInset?: boolean;
  disableBottomInset?: boolean;
};

export const ScreenWrapper: React.FC<Props> = ({
  children,
  fullscreen,
  disableInsets,
  disableTopInset,
  disableBottomInset,
}) => {
  const insets = useSafeAreaInsets();
  const frame = useSafeAreaFrame();

  const topInset = disableInsets || disableTopInset ? 0 : insets.top;
  const bottomInset = disableInsets || disableBottomInset ? 0 : insets.bottom;

  const containerStyles = [
    styles.container,
    {
      marginTop: topInset,
      marginBottom: bottomInset,
    }
  ];

  const innerStyles: any[] = [ styles.inner ];

  if (fullscreen) {
    const minHeight = frame.height - bottomInset - topInset;
    innerStyles.push({ minHeight });
  }

  return (
    <View style={styles.wrapper}>
      <ScrollView
        style={containerStyles}
        contentContainerStyle={innerStyles}
      >
        {children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#1F1F1F',
  },
  container: {
    flex: 1,
  },
  inner: {
    flexDirection: 'column',
    paddingHorizontal: 20,
  }
});