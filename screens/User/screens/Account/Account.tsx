import * as React from 'react';
import { StyleSheet, View } from 'react-native';

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
      <View style={styles.wrapper}>
        <Button
          onPress={handleLogout}
          label="Logout"
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 24,
  }
});
