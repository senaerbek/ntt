import React, { memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainNavigator } from './main-navigator';
import { SafeAreaView, StatusBar } from 'react-native';
import { styles } from './style';
import { AuthNavigator } from './auth-navigator';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export type StackParamList = {
  Splash: undefined;
  Main: undefined;
  Auth: undefined;
}

const Stack = createNativeStackNavigator<StackParamList>();
export const ApplicationNavigator = memo(function ApplicationNavigator() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {
          isLoggedIn ? (
            <Stack.Screen name='Main' component={MainNavigator} />
          ) : (
            <Stack.Screen name='Auth' component={AuthNavigator} />
          )
        }
      </Stack.Navigator>
    </SafeAreaView>
  );
});
