import { Button, Text } from 'react-native';
import { BottomSheetComponent } from '../../components/BottomSheetComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

export function HomeScreen() {

  const deleteFromAsyncStorage = () => {
    AsyncStorage.removeItem('location');
  };

  useEffect(() => {
    AsyncStorage.getItem('location').then((value) => {
      console.log(value);
    });
  }, []);

  return (
    <>
      <Text>HomeScreen</Text>
    </>
  );
}
