import React, { memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainNavigator } from './main-navigator';
import { SafeAreaView, StatusBar } from 'react-native';
import { styles } from './style';
import { AuthNavigator } from './auth-navigator';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { SplashScreen } from '../screens/SplashScreen';

export type StackParamList = {
  Splash: undefined;
  Main: undefined;
  Auth: undefined;
}

const Stack = createNativeStackNavigator<StackParamList>();
export const ApplicationNavigator = memo(function ApplicationNavigator() {
	const route = useSelector((state: RootState) => state.navigate.switchNavigationRoute);

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle='dark-content' />
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{
					route === 'Splash' ?
						<Stack.Screen name={'Splash'} component={SplashScreen} />
						:
						route === 'Main' ?
							<Stack.Screen name='Main' component={MainNavigator} />
							:
							<Stack.Screen name='Auth' component={AuthNavigator} />
				}
			</Stack.Navigator>
		</SafeAreaView>
	);
});
