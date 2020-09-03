import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import { Text } from 'components/Text';
import * as Assets from 'ui/assets';

type Props = {
  title: string;
  text: string;
  iconName: Assets.AssetIcon;
}

export const InfoCard: React.FC<Props> = ({
  title,
  text,
  iconName,
}) => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={Assets.getIconByName(iconName)}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  image: {
    width: 37,
    height: 37,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
  },
  text: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.4)',
    marginTop: 8,
  }
});