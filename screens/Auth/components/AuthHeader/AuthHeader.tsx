import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import * as Assets from '../../../../ui/assets';

export const AuthHeader: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={Assets.icons.appLogo}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.label}>Вход в КПК</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 'auto',
    borderWidth: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
  },
  label: {
    fontSize: 24,
    color: 'rgba(255,255,255,0.2)',
    marginTop: 32,
  }
});