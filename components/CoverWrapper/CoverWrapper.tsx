import * as React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import * as Assets from 'ui/assets';

const getNavBarRenderer = (insetTop: number, onBackPress: () => void) => (): JSX.Element => {
  const containerStyles = [styles.navContainer, { marginTop: insetTop }];

  return (
    <View style={containerStyles}>
      <TouchableOpacity
        onPress={onBackPress}
        style={styles.backButton}
      >
        <Image
          source={Assets.icons.backArrow}
          style={styles.backIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

type Props = {
  children: [React.ReactElement, React.ReactElement];
}

export const CoverWrapper: React.FC<Props> = ({
  children,
}) => {
  const [TitleComponent, ContentComponent] = children;
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const minHeight = insets.top + 40;
  const maxHeight = insets.top + 40 + 200;

  const handleBackPress = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <ReactNativeParallaxHeader
      headerMinHeight={minHeight}
      headerMaxHeight={maxHeight}
      extraScrollHeight={100}
      navbarColor="#1F1F1F"
      title={TitleComponent}
      renderContent={() => ContentComponent}
      backgroundImage={require('../../assets/images/quest-1-cover.png')}
      backgroundImageScale={1.1}
      renderNavBar={getNavBarRenderer(insets.top, handleBackPress)}
      containerStyle={styles.container}
      contentContainerStyle={styles.contentContainer}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#1F1F1F',
  },
  contentContainer: {
    borderTopColor: 'rgba(255, 255, 255, 0.04)',
    borderTopWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  navContainer: {
    width: '100%',
    height: 40,
  },
  backButton: {
    height: '100%',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
});