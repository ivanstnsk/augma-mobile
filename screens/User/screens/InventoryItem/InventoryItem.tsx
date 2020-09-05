import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

import { ModalWrapper } from 'components/ModalWrapper';
import { Button } from 'components/Button';
import { Text } from 'components/Text';
import * as Assets from 'ui/assets';
import { UserStackParamList } from 'screens/types';

export type Props = StackScreenProps<UserStackParamList, 'inventoryItem'>;

export const InventoryItem: React.FC<Props> = ({
  route: {
    params: {
      data: {
        type,
        title,
        description,
      },
    },
  },
}) => {
  const navigation = useNavigation();

  const handleCancelPress = React.useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <ModalWrapper>
      <View style={styles.container}>
        <View style={styles.inner}>
          <Image
            source={Assets.getInventoryIconByName(type)}
            resizeMode="contain"
            style={styles.icon}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{description}</Text>
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
  icon: {
    width: 44,
    height: 44,
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
  }
});
