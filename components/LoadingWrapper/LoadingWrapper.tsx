import * as React from 'react';
import { BackHandler } from 'react-native';

import { LoadingOverlay } from './LoadingOverlay';
import { LoadingContext } from './LoadingContext';

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

export const LoadingWrapper: React.FC<Props> = ({
  children,
}) => {
  const [visible, setVisible] = React.useState(false);
  const [bgVariant, setBgVariant] = React.useState<'transparent' | 'solid'>('transparent');

  const context: LoadingContext = {
    show: (bgVariant?: 'transparent' | 'solid') => {
      setVisible(true);
      if (bgVariant) {
        setBgVariant(bgVariant);
      } else {
        setBgVariant('transparent');
      }
    },
    hide: () => setVisible(false),
    visible,
  };

  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      return visible;
    });

    return backHandler.remove;
  }, [visible]);

  return (
    <LoadingContext.Provider value={context}>
      {children}
      <LoadingOverlay
        visible={visible}
        bgVariant={bgVariant}
      />
    </LoadingContext.Provider>
  );
}
