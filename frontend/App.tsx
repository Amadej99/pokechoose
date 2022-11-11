import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { getRandomPair } from "./utils/getRandomId";
import { usePokemonPair } from "./utils/usePokemonPair";
import { Pokemon } from "pokenode-ts";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [IdPair, setIdPair] = useState(getRandomPair([]));
  const [nextIdPair, setNextIdPair] = useState(getRandomPair([]));
  const [choiceId, setChoiceId] = useState(null);

  let [pokemon1, pokemon2]: Pokemon[] = usePokemonPair(IdPair);
  const [nextPokemon1, nextPokemon2]: Pokemon[] = usePokemonPair(nextIdPair);

  useEffect(() => {
    [pokemon1, pokemon2] = [nextPokemon1, nextPokemon2];
    setIdPair(nextIdPair);
    setNextIdPair(getRandomPair(IdPair));
  }, [choiceId]);

  return (
    <NavigationContainer>
      <>
        <StatusBar style="light" />
        <View className="flex min-h-screen items-center justify-center bg-pokeblue">
          {pokemon1 && pokemon2 ? (
            <View className="flex flex-col items-center justify-center ">
              <TouchableOpacity onPress={() => setChoiceId(pokemon1.id)}>
                <Image
                  source={{
                    uri: pokemon1.sprites.front_default,
                    width: 200,
                    height: 200,
                  }}
                ></Image>
              </TouchableOpacity>
              <Text className="text-lg font-bold text-pokeorange">VS.</Text>
              <TouchableOpacity onPress={() => setChoiceId(pokemon2.id)}>
                <Image
                  source={{
                    uri: pokemon2.sprites.front_default,
                    width: 200,
                    height: 200,
                  }}
                ></Image>
              </TouchableOpacity>
            </View>
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </>
    </NavigationContainer>
  );
}
