import * as React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { useSafeAreaInsets, useSafeAreaFrame } from 'react-native-safe-area-context';

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

export const ScreenWrapper: React.FC<Props> = ({
  children,
}) => {
  const insets = useSafeAreaInsets();
  const frame = useSafeAreaFrame();
  const minHeight = frame.height - insets.bottom - insets.top;

  const containerStyles = [
    styles.container,
    {
      marginTop: insets.top,
      marginBottom: insets.bottom,
    }
  ];

  const innerStyles = [
    styles.inner,
    { minHeight }
  ];

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