import { Button, Text, TouchableOpacity, View } from 'react-native';
import { BottomSheetComponent } from '../../components/BottomSheetComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useState } from 'react';
import { MapComponent } from '../../components/MapComponent';
import { HeaderComponent } from '../../HeaderComponent';
import { ButtonComponent } from '../../components/ButtonComponent';
import { constants } from '../../theme/constants';
import { styles } from './style';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../navigation/application-navigator';
import { useDispatch } from 'react-redux';
import { setSignOut } from '../../store/auth/authSlice';

export function HomeScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'Main'>>();
  const [location, setLocation] = useState<Location | null>(null);

  const deleteFromAsyncStorage = useCallback(async () => {
    await AsyncStorage.removeItem('location');
  }, []);

  const navigateToAuthStack = useCallback(() => {
    navigation.navigate('Auth');
  }, []);

  const logOutPress = useCallback(() => {
    deleteFromAsyncStorage().then(() => {
      dispatch(setSignOut());
      navigateToAuthStack();
    });
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('location').then((value) => {
      if (value) {
        setLocation(JSON.parse(value));
      }
    });
  }, []);

  return (
    <>
      <HeaderComponent
        title='HomeScreen'
        rightIcon={
          <TouchableOpacity onPress={logOutPress}>
            <Entypo
              color={constants.colors.primary}
              name='log-out'
              size={constants.iconSize.small} />
          </TouchableOpacity>
        }
      />
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <BottomSheetComponent
          content={
            <MapComponent
              location={location}
            />
          }
          children={
            <View style={styles.mapButtonContainer}>
              <ButtonComponent text={'Open My Location'} />
            </View>
          }
        />
      </View>
    </>
  );
}
