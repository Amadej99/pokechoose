import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { getRandomPair } from "../utils/getRandomId";
import { usePokemonPair } from "../utils/usePokemonPair";
import { Pokemon } from "pokenode-ts";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App({ navigation }) {
  const [alreadyRated, setAlreadyRated] = useState([]);
  const [resultsStorage, setResultsStorage] = useState([]);

  useEffect(() => {
    async function getStorage() {
      const alreadyRatedStorage = await AsyncStorage.getItem("alreadyRated");
      if (alreadyRatedStorage) {
        setAlreadyRated(JSON.parse(alreadyRatedStorage));
      }

      const resultsStorage = await AsyncStorage.getItem("personalResults");
      if (resultsStorage) {
        setResultsStorage(JSON.parse(resultsStorage));
      }
    }

    getStorage();
  }, []);

  const [IdPair, setIdPair] = useState(getRandomPair(alreadyRated));
  const [nextIdPair, setNextIdPair] = useState(getRandomPair([[]]));

  useEffect(() => {
    async function setStorage() {
      await AsyncStorage.setItem("alreadyRated", JSON.stringify(alreadyRated));
    }
    if (alreadyRated.length !== null && alreadyRated.length > 0) {
      setStorage();
    }
  }, [alreadyRated]);

  useEffect(() => {
    setResultsStorage(resultsStorage.sort((a, b) => a.id - b.id));
    async function setStorage() {
      await AsyncStorage.setItem(
        "personalResults",
        JSON.stringify(resultsStorage)
      );
    }
    if (resultsStorage.length !== null && resultsStorage.length > 0) {
      setStorage();
    }
  }, [resultsStorage]);

  let [pokemon1, pokemon2]: Pokemon[] = usePokemonPair(IdPair);
  const [nextPokemon1, nextPokemon2]: Pokemon[] = usePokemonPair(nextIdPair);

  function fetchNextPair() {
    setIdPair(nextIdPair);
    setNextIdPair(getRandomPair(IdPair));
  }

  useEffect(() => {
    if (nextPokemon1 && nextPokemon2) {
      if (!alreadyRated.includes(IdPair)) {
        setAlreadyRated([...alreadyRated, IdPair]);
      }
    }
  }, [nextPokemon1 && nextPokemon2]);

  function handleResultsStorage(
    pokemon: Pokemon,
    pokemon2: Pokemon,
    winner: number
  ) {
    if (
      !(resultsStorage.filter((e) => e.id === pokemon.id).length > 0) &&
      !(resultsStorage.filter((e) => e.id === pokemon2.id).length > 0)
    ) {
      setResultsStorage([
        ...resultsStorage,
        {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.front_default,
          votedFor: winner == 1 ? 1 : 0,
          votedAgainst: winner == 1 ? 0 : 1,
        },
        {
          id: pokemon2.id,
          name: pokemon2.name,
          image: pokemon2.sprites.front_default,
          votedFor: winner == 2 ? 1 : 0,
          votedAgainst: winner == 2 ? 0 : 1,
        },
      ]);
    } else if (resultsStorage.filter((e) => e.id === pokemon.id).length > 0) {
      console.log(pokemon.name + " is already in resultsStorage");
      const index = resultsStorage.findIndex(
        (result) => result.id === pokemon.id
      );
      winner == 1
        ? (resultsStorage[index].votedFor += 1)
        : (resultsStorage[index].votedAgainst += 1);

      setResultsStorage([
        ...resultsStorage,
        {
          id: pokemon2.id,
          name: pokemon2.name,
          image: pokemon2.sprites.front_default,
          votedFor: winner == 2 ? 1 : 0,
          votedAgainst: winner == 2 ? 0 : 1,
        },
      ]);
    } else if (resultsStorage.filter((e) => e.id === pokemon2.id).length > 0) {
      console.log(pokemon2.name + " is already in resultsStorage");
      const index = resultsStorage.findIndex(
        (result) => result.id === pokemon2.id
      );
      winner == 2
        ? (resultsStorage[index].votedFor += 1)
        : (resultsStorage[index].votedAgainst += 1);

      setResultsStorage([
        ...resultsStorage,
        {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.front_default,
          votedFor: winner == 1 ? 1 : 0,
          votedAgainst: winner == 1 ? 0 : 1,
        },
      ]);
    } else {
      const index1 = resultsStorage.findIndex(
        (result) => result.id === pokemon.id
      );
      winner == 1
        ? (resultsStorage[index1].votedFor += 1)
        : (resultsStorage[index1].votedAgainst += 1);

      const index2 = resultsStorage.findIndex(
        (result) => result.id === pokemon2.id
      );
      winner == 2
        ? (resultsStorage[index2].votedFor += 1)
        : (resultsStorage[index2].votedAgainst += 1);
    }
  }

  console.log("Original: " + resultsStorage.length);

  return (
    <>
      <StatusBar style="light" />
      <View className="flex min-h-screen items-center justify-center bg-pokeblue">
        {pokemon1 && pokemon2 ? (
          <View className="flex flex-col items-center justify-center space-y-5">
            <TouchableOpacity
              onPress={async () => {
                await fetch("http://192.168.0.136:8000/pokemon/rate", {
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

                handleResultsStorage(pokemon1, pokemon2, 1);
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
                await fetch("http://192.168.0.136:8000/pokemon/rate", {
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

                handleResultsStorage(pokemon1, pokemon2, 2);
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
