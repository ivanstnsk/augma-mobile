import * as React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const saveState = (status: boolean) => {
  return new Promise(async () => {
    try {
      await AsyncStorage.setItem('@Tutorial/Done', `${status}`);

    } catch (e) {
      //
    }
  });
};

const readState = (): Promise<boolean> => {
  return new Promise(async (resolve) => {
    try {
      const value = await AsyncStorage.getItem('@Tutorial/Done')
      if(value !== null) {
        const status = value === 'true';
        resolve(status);
      }
    } catch(e) {
      //
      resolve(false);
    }
  });
};

type TutorialHook = {
  done: boolean;
  finish: () => void;
};

export const useTutorial = (): TutorialHook => {
  const [done, setDone] = React.useState(false);

  const finish = React.useCallback(async () => {
    await saveState(true);
    readState().then((status) => setDone(status));
  }, []);

  React.useEffect(() => {
    readState().then((status) => setDone(status));
  }, []);

  return {
    done,
    finish,
  }
};
