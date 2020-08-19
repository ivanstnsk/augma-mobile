import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

type Props = {
  title: string;
}

export const Title: React.FC<Props> = ({
  title,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.back} />
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    position: 'relative',
    marginHorizontal: 16,
  },
  back: {
    ...StyleSheet.absoluteFillObject,
    top: 'auto',
    bottom: 0,
    height: 10,
    backgroundColor: 'rgba(198, 38, 38, 0.2)',
    opacity: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: '#fff',
    textTransform: 'capitalize'
  },
});