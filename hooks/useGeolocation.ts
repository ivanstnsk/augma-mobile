import * as React from 'react';
import * as Location from 'expo-location';

type LocationHook = {
  permissionGranted: boolean;
  error: any,
  requestPermissions: () => void;
}

export const useGeolocation = () => {
  // const [location, setLocation] = React.useState(null);
  const [permissionGranted, setPermissionGranted] = React.useState(false);
  const [error, setError] = React.useState(null);

  const requestPermissions = React.useCallback(async () => {
    const { status } = await Location.requestPermissionsAsync();
    const nextPermissionGranted = status === 'granted';
    setPermissionGranted(nextPermissionGranted);
  }, []);

  React.useEffect(() => {
    Location.getPermissionsAsync()
      .then(({ status }) => {
        const nextPermissionGranted = status === 'granted';
        setPermissionGranted(nextPermissionGranted);
      })
      .catch((error) => setError(error));
  }, []);

  return {
    permissionGranted,
    error,
    requestPermissions,
  }
}