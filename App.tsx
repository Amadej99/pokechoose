import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <>
        <StatusBar style="light" />
        <View className="flex min-h-screen items-center justify-center bg-black">
          <Text className="text-white">
            Open up App.js to start working on your app!
          </Text>
        </View>
      </>
    </NavigationContainer>
  );
}
