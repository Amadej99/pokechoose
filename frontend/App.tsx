// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./pages/HomeScreen";
import ChoosingScreen from "./pages/ChoosingScreen";
import ResultsScreen from "./pages/ResultsScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="ChoosingScreen"
          component={ChoosingScreen}
          options={{
            headerTransparent: true,
            title: "",
            headerTintColor: "#fff",
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="ResultsScreen"
          component={ResultsScreen}
          options={{
            headerTransparent: true,
            title: "",
            headerTintColor: "#fff",
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
