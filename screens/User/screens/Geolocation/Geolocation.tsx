import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import * as Assets from 'ui/assets';
import { Text } from 'components/Text';

const TEXT = `
Ваш девайс в процессе подключения к нашей защищенной сети. 

Не беспокойтесь, когда Ваш девайс будет готов, спутники Корпорации не смогут вас отследить!
(в теории)`;
// const TEXT_ACCEPTED = `
// Служба уведомлений подключена. 
// `;
const TEXT_NOT_ACCEPTED = `
Нам нужно Ваше разрешение на использование
службы уведомлений. 
`;

export const Geolocation: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={Assets.icons.welcomeTab2}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <Text>{TEXT}</Text>
        <Text>{TEXT_NOT_ACCEPTED}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#1F1F1F',
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 180,
  },
  textContainer: {
    flex: 1,
    width: '100%',
    paddingTop: 24,
  },
});
