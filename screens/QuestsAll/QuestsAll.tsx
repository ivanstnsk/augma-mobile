import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ScreenWrapper } from '../../components/ScreenWrapper';
import { NoScreen } from '../../components/NoScreen';

export const QuestsAll: React.FC = () => {
  const navigation = useNavigation();

  const handlePress = React.useCallback(() => {
    navigation.navigate('quest');
  }, []);

  return (
    <ScreenWrapper>
      <Button onPress={handlePress} title="Open quest" />
    </ScreenWrapper>
  );
}

// const styles = StyleSheet.create({
// });
