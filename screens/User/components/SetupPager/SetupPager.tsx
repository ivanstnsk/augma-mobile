import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Spacer } from 'components/Spacer';
import { Button } from 'components/Button';

import { ActivePageContext, Route, usePager } from './hooks';

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

export const SetupPager: React.FC<Props> = ({
  children,
}) => {
  const [route, setRoute] = React.useState<Route>({ name: '' });
  const Pager = usePager(route.name);
  const insets = useSafeAreaInsets();

  const wrapperStyles = [
    styles.wrapper,
    { paddingBottom: insets.bottom },
  ];

  const context: ActivePageContext = {
    route,
    set: setRoute,
  };

  return (
    <ActivePageContext.Provider value={context}>
      {children}
      <View style={wrapperStyles}>
        <View style={styles.container}>
          <Button
            {...Pager.prevButton}
            style={styles.button}
          />
          <Spacer width={16} />
          <Button
            {...Pager.nextButton}
            style={styles.button}
          />
        </View>
      </View>
    </ActivePageContext.Provider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#1F1F1F',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  button: {
    flex: 1,
  }
});