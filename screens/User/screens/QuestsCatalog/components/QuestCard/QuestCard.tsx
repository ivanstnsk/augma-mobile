import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Models } from 'types/models/models';
import * as Assets from 'ui/assets';
import { ComplexityBar } from 'components/ComplexityBar';

type Props = {
  data: Models.QuestShortOverview;
  onPress: () => void;
}

export const QuestCard: React.FC<Props> = ({
  data: {
    name,
    level,
  },
  onPress,
}) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
    >
      <Image
        source={Assets.icons.tempCover}
        resizeMode="cover"
        style={styles.image}
      />
      <LinearGradient
        colors={['rgba(45, 45, 45, 0)', 'rgba(27, 26, 26, 0.78)', 'rgba(15, 15, 15, 1)']}
        style={styles.overlay}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{name}</Text>
        <ComplexityBar level={level} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 160,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#252525',
    borderRadius: 16,
    shadowColor: '#000',
    shadowRadius: 21,
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    marginVertical: 5,
    overflow: 'hidden',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    top: 50,
  },
  contentContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 16,
    marginBottom: 16,
  }
});
