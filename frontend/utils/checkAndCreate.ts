import { Pokemon } from "pokenode-ts";

export async function checkAndCreate(pokemon: Pokemon[]) {
  console.log("Firing checkAndCreate");
  const pokemonList = pokemon.map((pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.front_default,
    };
  });

  const response = await fetch("http://192.168.0.33:8000/pokemonCreate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ pokemonList }),
  });

  console.log(response);

  if (response.status == 200) {
    return true;
  } else {
    return false;
  }
}
