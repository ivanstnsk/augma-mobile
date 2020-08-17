import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

import { ComplexityBar } from '../../../../components/ComplexityBar';

import * as Assets from '../../../../ui/assets';

type Props = {
  label: string;
  level: number;
  onPress: () => void;
}

export const QuestCard: React.FC<Props> = ({
  label,
  level,
  onPress,
}) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
    >
      <Image
        source={Assets.icons.noQuestIcon}
        resizeMode="contain"
        style={styles.icon}
      />
      <Text style={styles.label}>{label}</Text>
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
    paddingVertical: 16,
    marginVertical: 5,
  },
  icon: {
    width: 100,
    height: 100,
  },
  label: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 16,
    marginBottom: 16,
  }
});
