import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import * as Assets from 'ui/assets';

export type AvatarLookVariant = 'normal' | 'large';

export type AvatarProps = {
  variant?: AvatarLookVariant;
}

const getStyles = (variant: AvatarLookVariant) => {
  switch (variant) {
    case 'normal': {
      return {
        wrapper: {
          width: 100,
          height: 100,
          borderRadius: 50,
        },
        image: {
          width: 70,
          height: 70,
        }
      };
    }
    case 'normal':
    default: {
      return {
        wrapper: {
          width: 50,
          height: 50,
          borderRadius: 25,
        },
        image: {
          width: 30,
          height: 30,
        }
      };;
    }
  }
}

export const Avatar: React.FC<AvatarProps> = ({
  variant = 'normal',
}) => {
  const addStyles = getStyles(variant);

  const wrapperStyles = [
    styles.wrapper,
    addStyles.wrapper,
  ];

  const imageStyles = [
    styles.image,
    addStyles.image,
  ];

  return (
    <View style={wrapperStyles}>
      <Image
        source={Assets.icons.account}
        resizeMode="contain"
        style={imageStyles}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181818',
  },
  image: {}
});