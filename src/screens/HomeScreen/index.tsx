import { Button, Text, TouchableOpacity } from 'react-native';
import { BottomSheetComponent } from '../../components/BottomSheetComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { MapComponent } from '../../components/MapComponent';
import { HeaderComponent } from '../../HeaderComponent';

export function HomeScreen() {
  const [location, setLocation] = useState<Location | null>(null);

  const deleteFromAsyncStorage = () => {
    AsyncStorage.removeItem('location');
  };

  useEffect(() => {
    AsyncStorage.getItem('location').then((value) => {
      if (value) {
        console.log(value);
        setLocation(JSON.parse(value));
      }
    });
  }, []);

  return (
    <>
      <HeaderComponent title='HomeScreen' />
      <BottomSheetComponent
        content={
          <MapComponent
            location={location}
          />
        }
        children={<Text>Open BottomSheet</Text>}
      />
      <TouchableOpacity onPress={deleteFromAsyncStorage}>

        <Text>HomeScreen</Text>
      </TouchableOpacity>
    </>
  );
}
