import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from 'components/Button';
import { Text } from 'components/Text';
import { Avatar } from 'components/Avatar';
import { useUserInfo } from 'store/user';
import { useLogin } from 'hooks';

export const Account: React.FC = () => {
  const Login = useLogin();
  const UserInfo = useUserInfo();

  const handleLogout = () => {
    Login.logout();
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.infoContainer}>
        <Avatar />
        <Text style={styles.name}>{UserInfo.name}</Text>
      </View>
      <Button
        onPress={handleLogout}
        label="Logout"
        variant="normal"
        color="primary"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#1F1F1F',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 19,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  name: {
    marginTop: 24,
    fontSize: 18,
  }
});
