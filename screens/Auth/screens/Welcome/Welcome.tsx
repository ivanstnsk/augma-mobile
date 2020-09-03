import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ScreenWrapper } from 'components/ScreenWrapper';
import { Button } from 'components/Button';
import { Spacer } from 'components/Spacer';

export const Welcome: React.FC = () => {
  const navigation = useNavigation();

  const getPressHandler = React.useCallback((route: string) => () => {
    navigation.navigate(route);
  }, [navigation]);

  return (
    <ScreenWrapper fullscreen>
      <View style={styles.container}>
        <Button
          onPress={getPressHandler('login')}
          label="Вход"
          color="primary"
        />
        <Spacer height={16} />
        <Button
          onPress={getPressHandler('registration')}
          label="Регистрация"
          color="disabled"
          disabled
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});
