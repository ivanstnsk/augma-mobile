import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';

import { useActivePage } from '../SetupPager/hooks';

type Props = {} & MaterialTopTabBarProps;

const renderTick = (index: number, active: boolean): JSX.Element => {
  const tickStyles = active
  ? [ styles.tick, styles.tickActive ]
  : styles.tick;

  return (
    <View key={`tick${index}`} style={tickStyles} />
  );
}

export const SetupHeader: React.FC<Props> = ({
  state: {
    index: activeIndex,
    routes,
  },
}) => {
  const insets = useSafeAreaInsets();
  const ActivePage = useActivePage();

  const wrapperStyles = [
    styles.wrapper,
    { paddingTop: insets.top },
  ];

  React.useEffect(() => {
    ActivePage.set({ name: routes[activeIndex].name });
  }, [activeIndex]);

  return (
    <View style={wrapperStyles}>
      <View style={styles.container}>
        {routes.map((_, index) => {
          const active = index === activeIndex;

          return renderTick(index, active);
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#1F1F1F',
    paddingBottom: 8,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  tick: {
    width: 34,
    height: 4,
    backgroundColor: '#393939',
    borderRadius: 2,
    marginHorizontal: 3,
  },
  tickActive: {
    backgroundColor: '#D12727',
  },
});