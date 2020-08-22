import * as React from 'react';
// import { StyleSheet } from 'react-native';

import { ScreenWrapper } from 'components/ScreenWrapper';
import { Button } from 'components/Button';
import { useLogin } from 'hooks';

export const Account: React.FC = () => {
  const Login = useLogin();

  const handleLogout = () => {
    Login.logout();
  }

  return (
    <ScreenWrapper>
      <Button
        onPress={handleLogout}
        label="Logout"
      />
    </ScreenWrapper>
  );
}

// const styles = StyleSheet.create({
// });
