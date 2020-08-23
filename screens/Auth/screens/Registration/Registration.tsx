import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ScreenWrapper } from 'components/ScreenWrapper';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Spacer } from 'components/Spacer';

import { AuthHeader } from '../../components';

import { useRegistrationForm } from './hooks';

export const Registration: React.FC = () => {
  const RegistrationForm = useRegistrationForm();
  const navigation = useNavigation();

  const handleRegistrationPress = React.useCallback(() => {
    RegistrationForm.submit();
  }, [RegistrationForm]);

  const handleBackPress = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <ScreenWrapper>
      <AuthHeader title="Регистрация" />
      <View style={styles.form}>
        <Input
          placeholder="Email"
          autoCapitalize="none"
          autoCompleteType="email"
          autoCorrect={false}
          keyboardType="email-address"
          {...RegistrationForm.fields.email}
        />
        <Input
          placeholder="Пароль"
          secureTextEntry
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
          {...RegistrationForm.fields.password}
        />
        <Input
          placeholder="Пароль еще раз"
          secureTextEntry
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
          {...RegistrationForm.fields.passwordRepeat}
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
          onPress={handleRegistrationPress}
          label="Регистрация"
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
