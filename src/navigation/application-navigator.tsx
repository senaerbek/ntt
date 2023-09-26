import React, { memo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainNavigator } from "./main-navigator";
import { SafeAreaView } from "react-native";
import { styles } from "./style";

const Stack = createNativeStackNavigator();
export const ApplicationNavigator = memo(function ApplicationNavigator() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainNavigator} />
      </Stack.Navigator>
    </SafeAreaView>
  );
});
