import { HomeScreen } from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./style";
import { constants } from "../theme/constants";
import { CartScreen } from "../screens/CartScreen";
import { ProductListScreen } from "../screens/ProductListScreen";
import { FavoriteListScreen } from "../screens/FavoriteListScreen";

const BottomTab = createBottomTabNavigator();

function Tabs() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Home") {
            return <FontAwesome name="home" size={24} color={color} />;
          } else if (route.name === "Cart") {
            return <FontAwesome name="shopping-cart" size={24} color={color} />;
          } else if (route.name === "List") {
            return <FontAwesome name="list" size={24} color={color} />;
          } else if (route.name === "FavoriteList") {
            return <FontAwesome name="heart" size={24} color={color} />;
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
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: "Home" }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{ tabBarLabel: "Cart" }}
      />
      <BottomTab.Screen
        name="List"
        component={ProductListScreen}
        options={{ tabBarLabel: "List" }}
      />
      <BottomTab.Screen
        name="FavoriteList"
        component={FavoriteListScreen}
        options={{ tabBarLabel: "Favorite List" }}
      />
    </BottomTab.Navigator>
  );
}

export function MainNavigator() {
  return <Tabs />;
}
