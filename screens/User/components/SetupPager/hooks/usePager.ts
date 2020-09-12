import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import * as TutorialsAll from 'store/tutorials';
import { ButtonProps } from 'components/Button';

type PagerHook = {
  prevButton: ButtonProps;
  nextButton: ButtonProps;
}

const INIT_PREV_BUTTON: ButtonProps = {
  label: 'Назад',
  onPress: () => {},
}

const INIT_NEXT_BUTTON: ButtonProps = {
  label: 'Далее',
  onPress: () => {},
}

export const usePager = (activePage: string): PagerHook => {
  const navigation = useNavigation();
  const TutorialsActions = TutorialsAll.useTutorialsActions();
  const [prevButton, setPrevButton] = React.useState<ButtonProps>(INIT_PREV_BUTTON);
  const [nextButton, setNextButton] = React.useState<ButtonProps>(INIT_NEXT_BUTTON);

  const preparePrevButton = (activePage: string): ButtonProps => {
    if (activePage === 'welcome') {
      return {
        label: 'Назад',
        disabled: true,
        color: 'disabled',
        variant: 'outline',
        onPress: () => {},
      }
    } else if (activePage === 'geolocation'
      || activePage === 'notification'
      || activePage === 'finish'
    ) {
      return {
        label: 'Назад',
        color: 'default',
        variant: 'outline',
        onPress: () => navigation.goBack(),
      }
    }
    return INIT_NEXT_BUTTON;
  }

  const prepareNextButton = (activePage: string): ButtonProps => {
    if (activePage === 'welcome') {
      return {
        label: 'Далее',
        color: 'primary',
        onPress: () => navigation.navigate('geolocation'),
      }
    } else if (activePage === 'geolocation') {
      return {
        label: 'Разрешить',
        color: 'secondary',
        onPress: () => navigation.navigate('notification'),
      }
    } else if (activePage === 'notification') {
      return {
        label: 'Разрешить',
        color: 'secondary',
        onPress: () => navigation.navigate('finish'),
      }
    } else if (activePage === 'finish') {
      return {
        label: 'Завершить',
        color: 'primary',
        onPress: TutorialsActions.welcomeMarkAdDone,
      }
    }
    return INIT_NEXT_BUTTON;
  }

  React.useEffect(() => {
    const newPrevButton = preparePrevButton(activePage);
    const newNextButton = prepareNextButton(activePage);

    setPrevButton(newPrevButton);
    setNextButton(newNextButton);
  }, [activePage]);

  return {
    prevButton,
    nextButton,
  }
};
