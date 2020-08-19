import * as React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

export const ScreenWrapper: React.FC<Props> = ({
  children,
}) => {
  return (
    <View style={styles.wrapper}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1F1F1F',
  }
});