import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  title: string;
  RightComponent: React.ReactElement;
}

export const HeaderBlock: React.FC<Props> = ({
  title,
  RightComponent,
}) => {
  const insets = useSafeAreaInsets();

  const wrapperStyles = {
    ...styles.wrapper,
    paddingTop: insets.top + 24,
  };

  return (
    <View style={wrapperStyles}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.titleBack} />
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        </View>
      </View>
      {RightComponent}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1F1F1F',
    paddingBottom: 8,
  },
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titleBack: {
    ...StyleSheet.absoluteFillObject,
    top: 'auto',
    bottom: 0,
    height: 16,
    backgroundColor: 'rgba(198, 38, 38, 0.1)',
    opacity: 10,
  },
  titleContainer: {
    position: 'relative',
  },
  title: {
    fontSize: 34,
    fontWeight: '500',
    color: '#C62626',
    textTransform: 'capitalize'
  },
});