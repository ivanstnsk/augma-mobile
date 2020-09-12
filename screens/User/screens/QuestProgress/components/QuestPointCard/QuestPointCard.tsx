import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

import { Text } from 'components/Text';
import { Models } from 'types/models/models';
import * as Assets from 'ui/assets';

type Props = {
  data: Models.QuestPoint;
  onOpenDetailsPress: () => void;
}

export const QuestPointCard: React.FC<Props> = ({
  data: {
    id,
    type,
    title,
    description,
  },
  onOpenDetailsPress,
}) => {
  const wrapperStyles = [
    styles.wrapper,
    { backgroundColor: getBgColor(type) }
  ];

  const dashLineSrc = type === 'active'
    ? Assets.icons.dashLineActive
    : Assets.icons.dashLine;

  const titleStyles = type === 'passed'
    ? [ styles.title, styles.textPassed ]
    : styles.title;

  const descriptionStyles = type === 'passed'
    ? [ styles.description, styles.textPassed ]
    : styles.description;

  return (
    <TouchableOpacity
      disabled={type !== 'active'}
      onPress={onOpenDetailsPress}
      style={wrapperStyles}
    >
      <View style={styles.leftContainer}>
        {type !== 'passed' && (
          <Image
            source={dashLineSrc}
            resizeMode="repeat"
            style={styles.dashLine}
          />
        )}
        {type === 'passed' && (
         <View style={styles.pointLockedContainer}>
          <Image
            source={Assets.icons.pointPassed}
            resizeMode="contain"
            style={styles.lockedImage}
          />
        </View>
        )}
        {type === 'active' && (
          <View style={styles.pointContainer}>
            <View style={styles.pointCircle}>
              <Text style={styles.pointLabel}>3</Text>
            </View>
          </View>
        )}
        {type === 'locked' && (
          <View style={styles.pointLockedContainer}>
            <Image
              source={Assets.icons.pointLocked}
              resizeMode="contain"
              style={styles.lockedImage}
            />
          </View>
        )}
      </View>
      <View style={styles.centerContainer}>
        <Text style={titleStyles}>{title}</Text>
        <Text style={descriptionStyles} numberOfLines={4}>{description}</Text>
      </View>
      <View style={styles.rightContainer}>
        {type === 'active' && (
          <Image
            source={Assets.icons.cardOpen}
            resizeMode="contain"
          />
        )}
        {type === 'passed' && (
          <Text style={styles.textPassed} numberOfLines={1}>12:23</Text>
        )}
      </View>
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
  leftContainer: {
    width: 69,
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  centerContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 16,
  },
  rightContainer: {
    width: 69,
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
  },
  description: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.4)',
    marginTop: 8,
  },
  dashLine: {
    width: 2,
    height: '100%',
    position: 'absolute',
  },
  pointContainer: {
    paddingVertical: 1,
    paddingHorizontal: 1,
    backgroundColor: '#2C2C2C',
  },
  pointLockedContainer: {
    paddingVertical: 1,
    paddingHorizontal: 1,
    backgroundColor: '#232323',
  },
  pointCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.6,
    borderColor: '#B32525',
  },
  pointLabel: {
    fontSize: 18,
    color: '#B32525',
  },
  lockedImage: {
    width: 28,
    height: 37,
  },
  textPassed: {
    color: '#4F4F4F',
  },
});
