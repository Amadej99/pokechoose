import { TouchableOpacity, View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsScreen = ({ navigation }) => {
  return (
    <View className="flex min-h-screen items-center justify-center bg-pokeblue px-2">
      <TouchableOpacity
        className="rounded bg-pokeorange px-2 py-1"
        onPress={() => AsyncStorage.clear()}
      >
        <Text className="text-4xl font-bold text-pokeblue">
          Clear localstorage
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
