import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Pokemon = {
  id: number;
  name: string;
  image: string;
  votedFor: Number;
  votedAgainst: Number;
};

const PrivateResultsScreen = ({ navigation }) => {
  const [results, setResults] = useState<Pokemon[] | null>([]);

  useEffect(() => {
    async function getResults() {
      const resultsStorage = await AsyncStorage.getItem("personalResults");
      if (resultsStorage) {
        setResults(
          JSON.parse(resultsStorage)
            .sort((a, b) => {
              return (
                Number(b.votedFor) /
                  (Number(b.votedFor) + Number(b.votedAgainst)) -
                Number(a.votedFor) /
                  (Number(a.votedFor) + Number(a.votedAgainst))
              );
            })
            .filter((v, i, a) => a.findIndex((v2) => v2.id === v.id) === i)
        );
      }
    }

    getResults();
  }, []);

  if (!results) return <Text>Loading...</Text>;

  console.log(results);

  return (
    <View className="min-h-screen bg-pokeblue">
      <ScrollView className="mt-24 flex flex-col space-y-2 bg-pokeblue">
        {results.map((result: Pokemon) => (
          <View
            key={result.id}
            className="mx-2 flex flex-row items-center justify-between"
          >
            <Image
              source={{ uri: result.image, width: 100, height: 100 }}
            ></Image>
            <View className="flex w-3/5 flex-col items-center justify-center space-y-2 px-2">
              <View className="flex w-full flex-row rounded bg-red-700">
                <View
                  style={{
                    width:
                      Math.round(
                        (Number(result.votedFor) /
                          (Number(result.votedFor) +
                            Number(result.votedAgainst))) *
                          100
                      ) + "%",
                  }}
                  //wtf tailwind
                  className="h-4 rounded bg-green-600"
                ></View>
              </View>
              <Text className="text-base font-bold capitalize text-pokeorange">
                {result.name}
              </Text>
            </View>
            <Text className="text-lg font-bold text-pokeorange">
              {Math.round(
                (Number(result.votedFor) /
                  (Number(result.votedFor) + Number(result.votedAgainst))) *
                  100
              )}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default PrivateResultsScreen;
