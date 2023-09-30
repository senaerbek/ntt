import React, { memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainNavigator } from './main-navigator';
import { SafeAreaView } from 'react-native';
import { styles } from './style';
import { AuthNavigator } from './auth-navigator';
import { SplashScreen } from '../screens/SplashScreen';

export type StackParamList = {
  Splash: undefined;
  Main: undefined;
  Auth: undefined;
}

const Stack = createNativeStackNavigator<StackParamList>();
export const ApplicationNavigator = memo(function ApplicationNavigator() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Splash' component={SplashScreen} />
        <Stack.Screen name='Main' component={MainNavigator} />
        <Stack.Screen name='Auth' component={AuthNavigator} />
      </Stack.Navigator>
    </SafeAreaView>
  );
});
