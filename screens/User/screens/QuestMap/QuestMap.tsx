import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Map } from 'components/Map';

import { CloseButton } from './components';

export const QuestMap: React.FC = () => {
  const navigation = useNavigation();
  const [mapVisible, setMapVisible] = React.useState(false);
  const [mapReady, setMapReady] = React.useState(false);

  const handleClosePress = React.useCallback(() => {
    setMapVisible(false);
    navigation.goBack();
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setMapVisible(true);
    }, 400);
  }, []);

  return (
    <View style={styles.wrapper}>
      <Map
        visible={mapVisible}
        readonly={false}
        onReady={setMapReady}
        style={styles.map}
      />
      {mapReady && (
        <CloseButton onPress={handleClosePress} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#1F1F1F',
  },
  map: {
    flex: 1,
  }
});
