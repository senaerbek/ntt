import React, { useCallback, useEffect, useState } from 'react';
import { MapComponent } from '../../components/MapComponent';
import { Button, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../navigation/application-navigator';
import { Location } from '../../models/Location';
import { ButtonComponent } from '../../components/ButtonComponent';
import { styles } from './style';

export function LoginScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'Auth'>>();
  const [location, setLocation] = useState<Location | null>(null);

  const onLoginPress = useCallback(async () => {
    await AsyncStorage.setItem('location', JSON.stringify(location));
    navigation.navigate('Main');
  }, [location, navigation]);

  return (
    <>
      <MapComponent onLocationChange={setLocation} search={true} />
      <View style={styles.buttonContainer}>
        <ButtonComponent text={'Login'} onPress={onLoginPress} />
      </View>
    </>
  );
}
