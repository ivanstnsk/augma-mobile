import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { StackHeaderTitleProps } from '@react-navigation/stack';

type Props = {} & StackHeaderTitleProps;

const prepareTitle = (routeName: string): string => {
  switch (routeName) {
    case 'account': return 'Аккаунт';
    case 'questsAll': return 'Квесты';
    case 'quest': return 'Сокровище древних пиратов';
    default: return routeName;
  }
}

export const HeaderTitle: React.FC<Props> = ({
  children,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.back} />
      <Text style={styles.title} numberOfLines={1}>{prepareTitle(children as string)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    marginHorizontal: 16,
  },
  back: {
    ...StyleSheet.absoluteFillObject,
    top: 'auto',
    bottom: 0,
    height: 10,
    backgroundColor: 'rgba(198, 38, 38, 0.1)',
    opacity: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#C62626',
    textTransform: 'capitalize'
  },
});