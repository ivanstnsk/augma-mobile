import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import * as Assets from 'ui/assets';

const MAX_LEVEL = 7;

type Props = {
  level: number;
}

const renderIcons = (level: number): JSX.Element[] => {
  const row: JSX.Element[] = [];

  for (let i = 0; i < MAX_LEVEL; i += 1) {
    const iconSource = i < level
      ? Assets.icons.skullActive
      : Assets.icons.skull;

    row.push(
      <Image
        key={`complexity-item-${i}`}
        source={iconSource}
        resizeMode="contain"
        style={styles.icon}
      />
    );
  }

  return row;
}

export const ComplexityBar: React.FC<Props> = ({
  level,
}) => {

  return (
    <View style={styles.wrapper}>
      {renderIcons(level)}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 16,
    height: 16,
    marginHorizontal: 1,
  },
});
