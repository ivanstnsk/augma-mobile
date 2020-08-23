import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ScreenWrapper } from 'components/ScreenWrapper';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Spacer } from 'components/Spacer';

import { AuthHeader } from '../../components';

import { useLoginForm } from './hooks';

export const Login: React.FC = () => {
  const LoginForm = useLoginForm();
  const navigation = useNavigation();

  const handleLoginPress = React.useCallback(() => {
    LoginForm.submit();
  }, [LoginForm]);

  const handleBackPress = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <ScreenWrapper>
      <AuthHeader title="Вход" />
      <View style={styles.form}>
        <Input
          placeholder="Email"
          autoCapitalize="none"
          autoCompleteType="email"
          autoCorrect={false}
          keyboardType="email-address"
          {...LoginForm.fields.email}
        />
        <Input
          placeholder="Пароль"
          secureTextEntry
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
          {...LoginForm.fields.password}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          onPress={handleBackPress}
          label="Назад"
          variant="outline"
        />
        <Spacer width={16} />
        <Button
          onPress={handleLoginPress}
          label="Войти"
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 24,
  }
});
