import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { ScreenWrapper } from '../../../../components/ScreenWrapper';

import { mapStyles } from './mapStyles';

export const QuestMap: React.FC = () => {
  return (
    <ScreenWrapper>
      <View style={styles.wrapper}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyles}
          followsUserLocation
          loadingEnabled
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  map: {
    flex: 1,
  }
});
