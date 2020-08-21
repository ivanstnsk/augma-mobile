import * as React from 'react';
// import { StyleSheet } from 'react-native';

import { ScreenWrapper } from '../../../../components/ScreenWrapper';
import { NoScreen } from '../../../../components/NoScreen';

import { AuthHeader } from '../../components';

export const Login: React.FC = () => {
  return (
    <ScreenWrapper>
      <AuthHeader />
    </ScreenWrapper>
  );
}

// const styles = StyleSheet.create({
// });
