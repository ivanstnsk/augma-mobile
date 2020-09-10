import * as React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Marker, LatLng } from 'react-native-maps';

import { Text } from 'components/Text';
import * as Assets from 'ui/assets';

type Props = {
  center: LatLng;
  active: boolean;
  number: number | string;
};

export const PointMarker: React.FC<Props> = ({
  center,
  active,
  number,
}) => {
  const textStyles = active
    ? [styles.text, styles.textActive]
    : styles.text;
  const iconSrc = active ? Assets.icons.markerActive : Assets.icons.marker;

  return (
    <Marker coordinate={center}>
      <TouchableOpacity>
        <Image
          source={iconSrc}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={textStyles}>{number}</Text>
      </TouchableOpacity>
    </Marker>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 42,
  },
  text: {
    fontSize: 15,
    color: '#000000',
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    marginTop: 3,
  },
  textActive: {
    color: '#ffffff',
  }
});
