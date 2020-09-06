import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ModalWrapper } from 'components/ModalWrapper';
import { Button } from 'components/Button';
import { TimeCounter } from 'components/TimeCounter';
import { useQuestActions } from 'store/quest';

export const QuestStartTimer: React.FC = () => {
  const navigation = useNavigation();
  const QuestActions = useQuestActions();

  const handleCancelPress = React.useCallback(() => {
    navigation.goBack();
  }, []);

  const handleStart = React.useCallback(() => {
    navigation.goBack();
    QuestActions.start('1');
  }, []);

  return (
    <ModalWrapper onOverlayPress={handleCancelPress}>
      <View style={styles.container}>
        <View style={styles.timerContainer}>
          <TimeCounter
            fromTime={1}
            onDidFinish={handleStart}
          />
        </View>
        <Button
          label="Отменить старт"
          variant="normal"
          color="primary"
          onPress={handleCancelPress}
        />
      </View>
    </ModalWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  timerContainer: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
