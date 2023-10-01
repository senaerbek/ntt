import React, { useCallback, useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { styles } from './style';
import { StackParamList } from '../../navigation/application-navigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { changeStackNavigation } from '../../store/navigate/navigateSlice';


export function SplashScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'Splash'>>();

  const navigateToApp = useCallback((stack: keyof StackParamList) => {
    navigation.navigate(stack);
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('location').then((location) => {
        if (location) {
          dispatch(changeStackNavigation({ switchNavigationRoute: 'Main' }));
          navigateToApp('Main');
        } else {
          dispatch(changeStackNavigation({ switchNavigationRoute: 'Auth' }));
          navigateToApp('Auth');
        }
      },
    );
  }, [dispatch, changeStackNavigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
    </View>
  );
}
