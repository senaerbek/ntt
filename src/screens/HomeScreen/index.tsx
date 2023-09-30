import { Button, Text } from 'react-native';
import { BottomSheetComponent } from '../../components/BottomSheetComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { MapComponent } from '../../components/MapComponent';

export function HomeScreen() {
  const [location, setLocation] = useState<Location | null>(null);

  const deleteFromAsyncStorage = () => {
    AsyncStorage.removeItem('location');
  };

  useEffect(() => {
    AsyncStorage.getItem('location').then((value) => {
      if (value) {
        setLocation(JSON.parse(value));
      }
    });
  }, []);

  return (
    <>
      <BottomSheetComponent
        content={
          <MapComponent
            location={location}
          />
        }
        children={<Text>Open BottomSheet</Text>}
      />
      <Text onPress={deleteFromAsyncStorage}>HomeScreen</Text>
    </>
  );
}
