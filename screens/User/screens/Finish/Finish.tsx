import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import * as Assets from 'ui/assets';

import { Text } from 'components/Text';

const TEXT = `
Процесс подключения Вашего девайса прошел успешно. Соединение с нашим спутником достаточно стабильное. 

Мы запомнили Ваши данные и хорошенько их зашифровали. В дальнейшем вход будет происходить моментально.


Спасибо за помощь в борьбе с Корпорацией!
`;

export const Finish: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={Assets.icons.welcomeTab4}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <Text>{TEXT}</Text>
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
