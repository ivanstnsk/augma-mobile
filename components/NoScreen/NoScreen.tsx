import * as React from 'react';
import { StyleSheet, ScrollView, Image, Text } from 'react-native';

import * as Assets from 'ui/assets';

export const NoScreen: React.FC = () => {
  return (
    <ScrollView
      style={styles.wrapper}
      contentContainerStyle={styles.container}
    >
      <Image
        source={Assets.icons.noScreen}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.label}>Скрин в разработке</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
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
    marginTop: 16,
  }
});