import * as React from 'react';
import { Circle, LatLng } from 'react-native-maps';

type Props = {
  center: LatLng;
  radius: number;
};

export const RegionMarker: React.FC<Props> = ({
  center,
  radius,
}) => {
  const [show, setShow] = React.useState(false);

  React.useLayoutEffect(() => {
    setShow(true)
  }, []);

  if (!show) {
    return null;
  }

  return (
    <Circle
      center={center}
      strokeColor="#D12727"
      strokeWidth={1}
      radius={radius}
      fillColor="rgba(209, 39, 39, 0.2)"
    />
  );
}
