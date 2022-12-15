import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { getRandomPair } from "../utils/getRandomId";
import { usePokemonPair } from "../utils/usePokemonPair";
import { checkAndCreate } from "../utils/checkAndCreate";
import { Pokemon } from "pokenode-ts";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App({ navigation }) {
  const [IdPair, setIdPair] = useState(getRandomPair([]));
  const [nextIdPair, setNextIdPair] = useState(getRandomPair([[]]));
  const [alreadyRated, setAlreadyRated] = useState([]);

  console.log(alreadyRated);

  useEffect(() => {
    async function getStorage() {
      const storage = await AsyncStorage.getItem("alreadyRated");
      if (storage) {
        setAlreadyRated(JSON.parse(storage));
      }
    }

    getStorage();
  }, []);

  useEffect(() => {
    async function setStorage() {
      await AsyncStorage.setItem("alreadyRated", JSON.stringify(alreadyRated));
    }
    if (alreadyRated.length !== null && alreadyRated.length > 0) {
      setStorage();
    }
  }, [alreadyRated]);

  let [pokemon1, pokemon2]: Pokemon[] = usePokemonPair(IdPair);
  const [nextPokemon1, nextPokemon2]: Pokemon[] = usePokemonPair(nextIdPair);

  function fetchNextPair() {
    setIdPair(nextIdPair);
    setNextIdPair(getRandomPair(IdPair));
  }

  useEffect(() => {
    if (nextPokemon1 && nextPokemon2) {
      checkAndCreate([nextPokemon1, nextPokemon2]);

      if (!alreadyRated.includes(IdPair)) {
        setAlreadyRated([...alreadyRated, IdPair]);
      }
    }
  }, [nextPokemon1 && nextPokemon2]);

  return (
    <>
      <StatusBar style="light" />
      <View className="flex min-h-screen items-center justify-center bg-pokeblue">
        {pokemon1 && pokemon2 ? (
          <View className="flex flex-col items-center justify-center space-y-5">
            <TouchableOpacity
              onPress={async () => {
                await fetch("http://192.168.50.136:8000/pokemon/rate", {
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
                <Text className="self-center capitalize text-pokeorange">
                  {pokemon1.id}
                </Text>
              </View>
            </TouchableOpacity>
            <Text className="text-lg font-bold text-pokeorange">VS.</Text>
            <TouchableOpacity
              onPress={async () => {
                await fetch("http://192.168.50.136:8000/pokemon/rate", {
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
                <Text className="self-center capitalize text-pokeorange">
                  {pokemon2.id}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </>
  );
}