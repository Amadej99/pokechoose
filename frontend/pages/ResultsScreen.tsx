import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { useResults } from "../utils/useResults";

type Pokemon = {
  id: number;
  name: string;
  image: string;
  votedFor: string;
  votedAgainst: string;
};

const ResultsScreen = ({ navigation }) => {
  const results = useResults();
  if (!results)
    return (
      <View className="flex min-h-screen items-center justify-center bg-pokeblue px-2">
        <Text className="font-extrabold text-pokeorange">Loading...</Text>
      </View>
    );

  return (
    <View className="min-h-screen bg-pokeblue px-2">
      <ScrollView className="mt-24 flex flex-col space-y-2 bg-pokeblue">
        {results.map((result: Pokemon) => (
          <View
            key={result.id}
            className="mx-2 flex flex-row items-center justify-between"
          >
            <Image
              source={{ uri: result.image, width: 100, height: 100 }}
            ></Image>
            <View className="flex w-1/2 flex-col items-center justify-center space-y-2 px-2">
              <View className="flex w-full flex-row rounded-md bg-pokedarkblue">
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
                  className="h-4 rounded-md bg-pokeorange"
                ></View>
              </View>
              <Text className="text-base font-bold capitalize text-pokeorange">
                {result.name}
              </Text>
            </View>
            <Text className="mr-4 text-lg font-extrabold text-pokeorange">
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

export default ResultsScreen;
