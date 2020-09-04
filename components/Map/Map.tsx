import * as React from 'react';
import { View, StyleSheet, ViewProps, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { LoadingOverlay } from '../LoadingWrapper/LoadingOverlay';

import { RegionMarker } from './components';
import { mapStyles } from './mapStyles';

type Props = {
  visible: boolean;
  readonly?: boolean;
  onPress?: () => void;
  onReady?: (ready: boolean) => void;
} & ViewProps;

export const Map: React.FC<Props> = ({
  visible,
  readonly,
  onReady,
  onPress,
  style,
}) => {
  const [ready, setReady] = React.useState(false);
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

  const handleReady = React.useCallback(() => {
    setTimeout(() => {
      setReady(true);
      onReady && onReady(true);
    }, 400);
  }, []);

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
          pointerEvents={readonly ? 'none' : undefined}
          onMapReady={handleReady}
          camera={camera}
          maxZoomLevel={19}
          minZoomLevel={10}
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
      <LoadingOverlay
        visible={!ready}
        bgVariant="solid"
      />
      {readonly && (
        <TouchableOpacity
          onPress={onPress}
          style={styles.buttonOverlay}
        />
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
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'red',
  },
  buttonOverlay: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  }
});
