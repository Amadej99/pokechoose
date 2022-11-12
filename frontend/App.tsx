import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { getRandomPair } from "./utils/getRandomId";
import { usePokemonPair } from "./utils/usePokemonPair";
import { checkAndCreate } from "./utils/checkAndCreate";
import { Pokemon } from "pokenode-ts";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [IdPair, setIdPair] = useState(getRandomPair([]));
  const [nextIdPair, setNextIdPair] = useState(getRandomPair([[]]));

  const [choiceId, setChoiceId] = useState(null);

  let [pokemon1, pokemon2]: Pokemon[] = usePokemonPair(IdPair);
  const [nextPokemon1, nextPokemon2]: Pokemon[] = usePokemonPair(nextIdPair);

  function fetchNextPair() {
    setIdPair(nextIdPair);
    setNextIdPair(getRandomPair(IdPair));
  }

  useEffect(() => {
    if (nextPokemon1 && nextPokemon2) {
      checkAndCreate([nextPokemon1, nextPokemon2]);
    }
  }, [nextPokemon1 && nextPokemon2]);

  return (
    <NavigationContainer>
      <>
        <StatusBar style="light" />
        <View className="flex min-h-screen items-center justify-center bg-pokeblue">
          {pokemon1 && pokemon2 ? (
            <View className="flex flex-col items-center justify-center space-y-5">
              <TouchableOpacity
                onPress={async () => {
                  await fetch("http://192.168.0.33:8000/pokemon/rate", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      upvote: pokemon1.id,
                      downvote: pokemon2.id,
                    }),
                  });
                  fetchNextPair();
                }}
              >
                <View>
                  <Image
                    source={{
                      uri: pokemon1.sprites.front_default,
                      width: 200,
                      height: 200,
                    }}
                  ></Image>
                  <Text className="self-center capitalize text-pokeorange">
                    {pokemon1.name}
                  </Text>
                </View>
              </TouchableOpacity>
              <Text className="text-lg font-bold text-pokeorange">VS.</Text>
              <TouchableOpacity
                onPress={async () => {
                  await fetch("http://192.168.0.33:8000/pokemon/rate", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      upvote: pokemon2.id,
                      downvote: pokemon1.id,
                    }),
                  });
                  fetchNextPair();
                }}
              >
                <View>
                  <Image
                    source={{
                      uri: pokemon2.sprites.front_default,
                      width: 200,
                      height: 200,
                    }}
                  ></Image>
                  <Text className="self-center capitalize text-pokeorange">
                    {pokemon2.name}
                  </Text>
                </View>
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
