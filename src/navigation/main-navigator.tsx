import { HomeScreen } from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './style';
import { constants } from '../theme/constants';
import { CartScreen } from '../screens/CartScreen';
import { ProductListScreen } from '../screens/ProductListScreen';
import { FavoriteListScreen } from '../screens/FavoriteListScreen';

export type BottomTabParamList = {
  Home: undefined;
  Cart: undefined;
  List: undefined;
  FavoriteList: undefined;
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function Tabs() {
	return (
		<BottomTab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color }) => {
					if (route.name === 'Home') {
						return <FontAwesome name='home' size={constants.iconSize.default} color={color} />;
					} else if (route.name === 'Cart') {
						return <FontAwesome name='shopping-cart' size={constants.iconSize.default} color={color} />;
					} else if (route.name === 'List') {
						return <FontAwesome name='list' size={constants.iconSize.default} color={color} />;
					} else if (route.name === 'FavoriteList') {
						return <FontAwesome name='heart' size={constants.iconSize.default} color={color} />;
					}
					return null;
				},
				headerShown: false,
				tabBarActiveTintColor: constants.colors.primary,
				tabBarInactiveTintColor: constants.colors.disabled,
				tabBarStyle: styles.tabbar,
			})}
		>
			<BottomTab.Screen
				name='Home'
				component={HomeScreen}
				options={{ tabBarLabel: 'Home' }}
			/>
			<BottomTab.Screen
				name='Cart'
				component={CartScreen}
				options={{ tabBarLabel: 'Cart' }}
			/>
			<BottomTab.Screen
				name='List'
				component={ProductListScreen}
				options={{ tabBarLabel: 'List' }}
			/>
			<BottomTab.Screen
				name='FavoriteList'
				component={FavoriteListScreen}
				options={{ tabBarLabel: 'Favorite List' }}
			/>
		</BottomTab.Navigator>
	);
}

export function MainNavigator() {
	return <Tabs />;
}
