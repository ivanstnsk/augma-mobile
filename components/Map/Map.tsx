import * as React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { RegionMarker } from './components';
import { mapStyles } from './mapStyles';

type Props = {
  visible: boolean;
} & ViewProps;

export const Map: React.FC<Props> = ({
  visible,
  style,
}) => {
  const wrapperStyles = [
    styles.wrapper,
    style,
  ];

  const camera = {
    center: {
      latitude: 50.002230,
      longitude: 36.238924,
    },
    heading: 1,
    pitch: 1,
    zoom: 13,
    altitude: 1,
  };

  return (
    <View style={wrapperStyles}>
      {visible && (
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyles}
          loadingEnabled
          loadingBackgroundColor="#1F1F1F"
          loadingIndicatorColor="#D12727"
          pointerEvents="none"
          camera={camera}
        >
          <RegionMarker
            center={{
              latitude: 50.002230,
              longitude: 36.238924,
            }}
            radius={500}
          />
        </MapView>
      )}
    </View>
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
