import { useState, useEffect } from "react";
import { PokemonClient } from "pokenode-ts";

export function usePokemonPair([id1, id2]) {
  const [pokemon1, setPokemon1] = useState(null);
  const [pokemon2, setPokemon2] = useState(null);

  useEffect(() => {
    async function getPokemon() {
      const client = new PokemonClient({
        cacheOptions: { maxAge: 5000, exclude: { query: false } },
      });

      const pokemon1 = await client.getPokemonById(id1);
      const pokemon2 = await client.getPokemonById(id2);
      setPokemon1(pokemon1);
      setPokemon2(pokemon2);
    }

    getPokemon();
  }, [id1, id2]);

  if (!pokemon1 || !pokemon2) {
    return [null, null];
  }

  return [pokemon1, pokemon2];
}
