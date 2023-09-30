import React, { useCallback, useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackParamList } from '../../navigation/application-navigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const DELAY = 2000;

export function SplashScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'Splash'>>();

  const navigateToApp = useCallback((stack: keyof StackParamList) => {
    setTimeout(() => {
      navigation.navigate(stack);
    }, DELAY);
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('location').then((location) => {
        if (location) {
          navigateToApp('Main');
        } else {
          navigateToApp('Auth');
        }
      },
    );
  }, []);

  return (
    <>
      <Text>SplashScreen</Text>
    </>
  );
}
