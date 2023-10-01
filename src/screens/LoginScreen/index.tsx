import React, { useCallback, useState } from 'react';
import { MapComponent } from '../../components/MapComponent';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../navigation/application-navigator';
import { Location } from '../../models/Location';
import { ButtonComponent } from '../../components/ButtonComponent';
import { styles } from './style';
import { useDispatch } from 'react-redux';
import { changeStackNavigation } from '../../store/navigate/navigateSlice';

export function LoginScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'Auth'>>();
  const [location, setLocation] = useState<Location | null>(null);

  const onLoginPress = useCallback(async () => {
    await AsyncStorage.setItem('location', JSON.stringify(location));
    dispatch(changeStackNavigation({ switchNavigationRoute: 'Main' }));
    navigation.navigate('Main');
  }, [location, navigation, dispatch, changeStackNavigation]);

  return (
    <>
      <MapComponent onLocationChange={setLocation} search={true} />
      <View style={styles.buttonContainer}>
        <ButtonComponent text={'Login'} onPress={onLoginPress} />
      </View>
    </>
  );
}
