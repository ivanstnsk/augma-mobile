import * as React from 'react';
// import { StyleSheet } from 'react-native';

import { ScreenWrapper } from 'components/ScreenWrapper';
import { Button } from 'components/Button';
import { useLogin } from 'hooks';

import { AuthHeader } from '../../components';


export const Login: React.FC = () => {
  const Login = useLogin();

  const handleLogin = () => {
    Login.login({
      username: 'test',
      password: 'test',
    });
  };

  return (
    <ScreenWrapper>
      <AuthHeader />
      <Button
        onPress={handleLogin}
        label="Login"
      />
    </ScreenWrapper>
  );
}

// const styles = StyleSheet.create({
// });
