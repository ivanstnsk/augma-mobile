import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

import { ModalWrapper } from 'components/ModalWrapper';
import { Button } from 'components/Button';
import { Text } from 'components/Text';
import { InventoryItem } from 'components/Inventory';
import { Spacer } from 'components/Spacer';
import { UserStackParamList } from 'screens/types';

export type Props = StackScreenProps<UserStackParamList, 'inventoryItemApply'>;

export const InventoryItemApply: React.FC<Props> = ({
  route: {
    params: {
      data: {
        id,
        type,
        title,
        disabled,
      },
    },
  },
}) => {
  const navigation = useNavigation();

  const handleCancelPress = React.useCallback(() => {
    navigation.goBack();
  }, []);

  const handleApplyPress = React.useCallback(() => {
  }, []);

  React.useEffect(() => {
    if (disabled) {
      handleCancelPress();
    }
  }, []);

  return (
    <ModalWrapper onOverlayPress={handleCancelPress}>
      <View style={styles.container}>
        <View style={styles.inner}>
          <View style={styles.iconContainer}>
            <InventoryItem
              id={id}
              size={44}
              type={type}
              disabled={disabled}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{`Применить "${title}"?`}</Text>
            <Text style={styles.text}>Вы уверенны что хотите применить предмет? После применения он исчезнет из коллекции.</Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            label="Отменить"
            variant="outline"
            onPress={handleCancelPress}
            style={styles.button}
          />
          <Spacer width={16} />
          <Button
            label="Применить"
            variant="normal"
            color="primary"
            onPress={handleApplyPress}
            style={styles.button}
          />
        </View>
      </View>
    </ModalWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  inner: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 64,
  },
  iconContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
  },
  text: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.4)',
    marginTop: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 24,
  },
  button: {
    flex: 1,
  }
});
