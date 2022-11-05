import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <View className="flex min-h-screen items-center justify-center bg-black">
        <Text className="text-white">
          Open up App.js to start working on your app!
        </Text>
      </View>
    </>
  );
}
