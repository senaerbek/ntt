import React, { useCallback, useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackParamList } from '../../navigation/application-navigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import { setSignIn } from '../../store/navigate/navigateSlice';

const DELAY = 2000;

export function SplashScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'Splash'>>();

  const navigateToApp = useCallback((stack: keyof StackParamList) => {
    setTimeout(() => {
      navigation.navigate(stack);
    }, DELAY);
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('location').then((location) => {
        if (location) {
          dispatch(setSignIn({ isLoggedIn: true }));
          navigateToApp('Main');
        } else {
          dispatch(setSignIn({ isLoggedIn: false }));
          navigateToApp('Auth');
        }
      },
    );
  }, [navigateToApp]);

  return (
    <>
      <Text>SplashScreen</Text>
    </>
  );
}
