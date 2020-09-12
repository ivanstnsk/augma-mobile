import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as QuestAll from 'store/quest';
import { ModalWrapper } from 'components/ModalWrapper';
import { Button } from 'components/Button';
import { Spacer } from 'components/Spacer';

export const QuestMenu: React.FC = () => {
  const [finishing, setFinishing] = React.useState(false);
  const navigation = useNavigation();
  const QuestActions = QuestAll.useQuestActions();

  const handleBackPress = React.useCallback(() => {
    navigation.goBack();
  }, []);

  const handleFinishPress = React.useCallback(() => {
    if (!finishing) {
      setFinishing(true);
      return;
    }

    QuestActions.finish();
  }, [setFinishing, finishing]);

  const handleFinishCancelPress = React.useCallback(() => {
    setFinishing(false);
  }, [setFinishing]);

  return (
    <ModalWrapper onOverlayPress={handleBackPress}>
      <View style={styles.wrapper}>
        <View style={styles.buttonsContainer}>
          {!finishing && (
            <Button
              variant="outline"
              color="default"
              label="Завершить квест"
              onPress={handleFinishPress}
              style={styles.button}
            />
          )}
          {finishing && (
            <>
              <Button
                variant="outline"
                color="default"
                label="Отменить"
                onPress={handleFinishCancelPress}
                style={styles.button}
              />
              <Spacer width={16} />
              <Button
                variant="normal"
                color="primary"
                label="Завершить"
                onPress={handleFinishPress}
                style={styles.button}
              />
            </>
          )}
        </View>
        <Button
          variant="normal"
          color="primary"
          label="Закрыть"
          onPress={handleBackPress}
        />
      </View>
    </ModalWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#1F1F1F',
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  button: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
});
