import React, { memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { styles } from './style';
import { LoginScreen } from '../screens/LoginScreen';

export type AuthStackParamList = {
  Login: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
export const AuthNavigator = memo(function AuthNavigator() {
	return (
		<View style={styles.container}>
			<AuthStack.Navigator screenOptions={{ headerShown: false }}>
				<AuthStack.Screen name='Login' component={LoginScreen} />
			</AuthStack.Navigator>
		</View>
	);
});
