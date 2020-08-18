import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ScreenWrapper } from '../../components/ScreenWrapper';
import { CoverWrapper } from '../../components/CoverWrapper';
import { Button } from '../../components/Button';

export const Quest: React.FC = () => {
  const insets = useSafeAreaInsets();

  const footerContainerStyles = [
    styles.footerContainer,
    { marginBottom: insets.bottom }
  ];

  return (
    <ScreenWrapper>
      <CoverWrapper />
      <View style={footerContainerStyles}>
        <Button
          label="Начать квест"
          onPress={() => {}}
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    paddingTop: 24,
    paddingHorizontal: 20,
  }
});
