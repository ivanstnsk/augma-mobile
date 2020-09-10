import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { Models } from 'types/models/models';

type Props = {
  data: Models.QuestPoint;
}

export const QuestPointCard: React.FC<Props> = ({
  data: {
    id,
    type,
    title,
    description,
  },
}) => {
  const wrapperStyles = [
    styles.wrapper,
    { backgroundColor: getBgColor(type) }
  ]
  return (
    <TouchableOpacity
      disabled={type === 'locked'}
      style={wrapperStyles}
    >
      
    </TouchableOpacity>
  );
}

const getBgColor = (type: Models.QuestPointType): string => {
  switch (type) {
    case 'locked': return 'rgba(255,255,255,0.02)';
    case 'active': return 'rgba(255,255,255,0.06)';
    case 'passed': default: return 'rgba(255,255,255,0.02)';
  }
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    minHeight: 121,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    borderRadius: 12,
    marginVertical: 4,
  },
});
