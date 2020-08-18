import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import * as Assets from '../../ui/assets';

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

const renderTitle = (): JSX.Element => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.titleInner}>
        <View style={styles.titleBack} />
        <Text style={styles.title} numberOfLines={1}>Вакцина</Text>
      </View>
    </View>
  );
}

const getContentRenderer = () => (): JSX.Element => {
  return (
    <>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
    </>
  );
}

export const CoverWrapper: React.FC = () => {
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
      // titleStyle={styles.titleStyle}
      title={renderTitle()}
      backgroundImage={require('../../assets/images/quest-1-cover.png')}
      backgroundImageScale={1.1}
      renderNavBar={getNavBarRenderer(insets.top, handleBackPress)}
      renderContent={getContentRenderer()}
      containerStyle={styles.container}
      contentContainerStyle={styles.contentContainer}
    />
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#1F1F1F',
  },
  contentContainer: {
    // flex: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.04)',
    borderTopWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  image: {
    width: 120,
    height: 120,
  },
  label: {
    fontSize: 24,
    color: 'rgba(255,255,255,0.2)',
    marginTop: 16,
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

  titleContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleInner: {
    position: 'relative',
    marginHorizontal: 16,
  },
  titleBack: {
    ...StyleSheet.absoluteFillObject,
    top: 'auto',
    bottom: 0,
    height: 10,
    backgroundColor: 'rgba(198, 38, 38, 0.2)',
    opacity: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: '#fff',
    textTransform: 'capitalize'
  },

  text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.7)',
    textTransform: 'capitalize',
    marginBottom: 16,
  },
});