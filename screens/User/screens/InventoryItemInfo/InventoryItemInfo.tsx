import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

import { ModalWrapper } from 'components/ModalWrapper';
import { Button } from 'components/Button';
import { Text } from 'components/Text';
import { InventoryItem } from 'components/Inventory';
import { UserStackParamList } from 'screens/types';

export type Props = StackScreenProps<UserStackParamList, 'inventoryItemInfo'>;

export const InventoryItemInfo: React.FC<Props> = ({
  route: {
    params: {
      data: {
        id,
        type,
        title,
        description,
        disabled,
      },
    },
  },
}) => {
  const navigation = useNavigation();

  const handleCancelPress = React.useCallback(() => {
    navigation.goBack();
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
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{description}</Text>
            {disabled && (
              <Text style={styles.textRed}>Этот предмет недоступен</Text>
            )}
          </View>
        </View>
        <Button
          label="Закрыть"
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
  textRed: {
    fontSize: 13,
    color: '#C62626',
    marginTop: 8,
  }
});
