import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex min-h-screen items-center justify-center space-y-10 bg-pokeblue">
      <TouchableOpacity
        className=" flex w-3/5 items-center justify-center rounded bg-pokeorange px-2 py-1"
        onPress={() => navigation.navigate("ChoosingScreen")}
      >
        <Text className=" text-center text-4xl font-bold text-pokeblue">
          1 v 1
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className=" flex w-3/5 items-center justify-center rounded bg-pokeorange px-2 py-1"
        onPress={() => navigation.navigate("ResultsScreen")}
      >
        <Text className=" text-center text-4xl font-bold text-pokeblue">
          Results
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className=" flex w-3/5 items-center justify-center rounded bg-pokeorange px-2 py-1"
        onPress={() => navigation.navigate("PrivateResultsScreen")}
      >
        <Text className="text-center text-4xl font-bold text-pokeblue">
          Personal Results
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className=" flex w-3/5 items-center justify-center rounded bg-pokeorange px-2 py-1"
        onPress={() => navigation.navigate("SettingsScreen")}
      >
        <Text className=" text-center text-4xl font-bold text-pokeblue">
          Settings
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
