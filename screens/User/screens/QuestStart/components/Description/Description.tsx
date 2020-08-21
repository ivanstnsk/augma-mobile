import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { ComplexityBar } from '../../../../../../components/ComplexityBar';

type Props = Pick<QuestInfo,
| 'level'
| 'limitation'
| 'description'
>;

const prepareLimitation = (limitation: number): string => {
  if (limitation === -1) {
    return 'Без лимита времени';
  }
  if (limitation > 0) {
    const d = new Date(0);
    d.setSeconds(limitation);
    const h = d.getUTCHours();
    const m = d.getUTCMinutes();
    const s = d.getUTCSeconds();
    const time = `${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
    return `Лимит времени ${time}`;
  }
  return '';
}

const renderCheckPoint = (checkPoint: QuestCheckPoint, index: number): JSX.Element => {
  const { name } = checkPoint;

  return (
    <View style={styles.inline} key={`checkPoint${index + 1}`}>
      <View style={styles.checkPointContainer}>
        <Text style={styles.checkPointIndex}>{index + 1}</Text>
      </View>
      <Text style={[styles.text, styles.checkPointText]}>
        {name}
      </Text>
    </View>
  );
}

export const Description: React.FC<Props> = ({
  level,
  limitation,
  description: {
    goal,
    points,
  }
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <View style={styles.leftCell}>
          <Text style={styles.title}>Сложность</Text>
        </View>
        <View style={styles.rightCell}>
          <ComplexityBar level={level} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.leftCell}>
          <Text style={styles.title}>Лимит</Text>
        </View>
        <View style={styles.rightCell}>
          <Text style={styles.text}>{prepareLimitation(limitation)}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.leftCell}>
          <Text style={styles.title}>Цель</Text>
        </View>
        <View style={styles.rightCell}>
         <Text style={styles.text}>{goal}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.leftCell}>
          <Text style={styles.title}>Чек-поинты</Text>
        </View>
        <View style={styles.rightCell}>
          {points.map(renderCheckPoint)}
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.leftCell}>
          <Text style={styles.title}>Локация</Text>
        </View>
        <View style={styles.rightCell}>
          <Image
            style={styles.locationImage}
            source={require('../../../../../../assets/images/location-cap.png')}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  leftCell: {
    flex: 1,
  },
  rightCell: {
    flex: 3,
    marginLeft: 16,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.7)',
  },
  checkPointText: {
    flex: 1,
    flexWrap: 'wrap',
  },
  locationImage: {
    width: '100%',
    height: 250,
    borderRadius: 16,
  },
  checkPointContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    marginRight: 8,
    marginBottom: 16,
  },
  checkPointIndex: {
    color: 'rgba(255,255,255,0.3)',
    fontSize: 12,
  }
});