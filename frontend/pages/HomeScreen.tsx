import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex min-h-screen items-center justify-center space-y-10 bg-pokeblue">
      <TouchableOpacity
        className="rounded bg-pokeorange px-2 py-1"
        onPress={() => navigation.navigate("ChoosingScreen")}
      >
        <Text className="text-4xl font-bold text-pokeblue">1 v 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="rounded bg-pokeorange px-2 py-1"
        onPress={() => navigation.navigate("ResultsScreen")}
      >
        <Text className="text-4xl font-bold text-pokeblue">Results</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
