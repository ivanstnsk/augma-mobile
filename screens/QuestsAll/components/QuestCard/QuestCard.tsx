import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

import { ComplexityBar } from '../../../../components/ComplexityBar';

type Props = {
  data: QuestInfo;
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
        source={require('../../../../assets/images/quest-1-cover.png')}
        resizeMode="cover"
        style={styles.image}
      />
      <Text style={styles.label}>{name}</Text>
      <ComplexityBar level={level} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#252525',
    borderRadius: 8,
    shadowColor: '#000',
    shadowRadius: 21,
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    paddingBottom: 16,
    marginVertical: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 120,
  },
  label: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 16,
    marginBottom: 16,
  }
});
