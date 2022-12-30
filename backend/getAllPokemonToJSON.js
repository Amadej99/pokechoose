// Path: backend\seeddb.js
import fetch from 'node-fetch';
import * as fs from 'fs';

async function seedPokemon() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=900');
  const data = await response.json();

  const pokemon = data.results.map((pokemon) => {
    return {
      url: pokemon.url,
    };
  });

  const allPokemon = [];

  pokemon.map(async (pokemon) => {
    await fetch(pokemon.url)
      .then((response) => response.json())
      .then(async (data) => {
        const pokemon = {
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
        };
        allPokemon.push(pokemon);

        if (allPokemon.length === 900) {
          allPokemon.sort((a, b) => a.id - b.id);
          var dictString = JSON.stringify(allPokemon);
          fs.writeFile('seedData.json', dictString, function (err, result) {
            if (err) console.log('error', err);
          });
        }
      });
  });
}

seedPokemon();
