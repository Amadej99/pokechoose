import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const pokemonData = [
    {
      id: 1,
      name: 'bulbasaur',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    },
    {
      id: 2,
      name: 'ivysaur',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    },
    {
      id: 3,
      name: 'venusaur',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    },
    {
      id: 4,
      name: 'charmander',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    },
    {
      id: 5,
      name: 'charmeleon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
    },
    {
      id: 6,
      name: 'charizard',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    },
    {
      id: 7,
      name: 'squirtle',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    },
    {
      id: 8,
      name: 'wartortle',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
    },
    {
      id: 9,
      name: 'blastoise',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
    },
    {
      id: 10,
      name: 'caterpie',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
    },
    {
      id: 11,
      name: 'metapod',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
    },
    {
      id: 12,
      name: 'butterfree',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
    },
    {
      id: 13,
      name: 'weedle',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
    },
    {
      id: 14,
      name: 'kakuna',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
    },
    {
      id: 15,
      name: 'beedrill',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
    },
    {
      id: 16,
      name: 'pidgey',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
    },
    {
      id: 17,
      name: 'pidgeotto',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
    },
    {
      id: 18,
      name: 'pidgeot',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
    },
    {
      id: 19,
      name: 'rattata',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
    },
    {
      id: 20,
      name: 'raticate',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
    },
    {
      id: 21,
      name: 'spearow',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
    },
    {
      id: 22,
      name: 'fearow',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
    },
    {
      id: 23,
      name: 'ekans',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png',
    },
    {
      id: 24,
      name: 'arbok',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png',
    },
    {
      id: 25,
      name: 'pikachu',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    },
    {
      id: 26,
      name: 'raichu',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
    },
    {
      id: 27,
      name: 'sandshrew',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png',
    },
    {
      id: 28,
      name: 'sandslash',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png',
    },
    {
      id: 29,
      name: 'nidoran-f',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png',
    },
    {
      id: 30,
      name: 'nidorina',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
    },
    {
      id: 31,
      name: 'nidoqueen',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png',
    },
    {
      id: 32,
      name: 'nidoran-m',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png',
    },
    {
      id: 33,
      name: 'nidorino',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png',
    },
    {
      id: 34,
      name: 'nidoking',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png',
    },
    {
      id: 35,
      name: 'clefairy',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
    },
    {
      id: 36,
      name: 'clefable',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png',
    },
    {
      id: 37,
      name: 'vulpix',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png',
    },
    {
      id: 38,
      name: 'ninetales',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png',
    },
    {
      id: 39,
      name: 'jigglypuff',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
    },
    {
      id: 40,
      name: 'wigglytuff',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png',
    },
    {
      id: 41,
      name: 'zubat',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png',
    },
    {
      id: 42,
      name: 'golbat',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png',
    },
    {
      id: 43,
      name: 'oddish',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png',
    },
    {
      id: 44,
      name: 'gloom',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png',
    },
    {
      id: 45,
      name: 'vileplume',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png',
    },
    {
      id: 46,
      name: 'paras',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png',
    },
    {
      id: 47,
      name: 'parasect',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png',
    },
    {
      id: 48,
      name: 'venonat',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png',
    },
    {
      id: 49,
      name: 'venomoth',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png',
    },
    {
      id: 50,
      name: 'diglett',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png',
    },
    {
      id: 51,
      name: 'dugtrio',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png',
    },
    {
      id: 52,
      name: 'meowth',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
    },
    {
      id: 53,
      name: 'persian',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png',
    },
    {
      id: 54,
      name: 'psyduck',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png',
    },
    {
      id: 55,
      name: 'golduck',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png',
    },
    {
      id: 56,
      name: 'mankey',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png',
    },
    {
      id: 57,
      name: 'primeape',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png',
    },
    {
      id: 58,
      name: 'growlithe',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png',
    },
    {
      id: 59,
      name: 'arcanine',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png',
    },
    {
      id: 60,
      name: 'poliwag',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png',
    },
    {
      id: 61,
      name: 'poliwhirl',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png',
    },
    {
      id: 62,
      name: 'poliwrath',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png',
    },
    {
      id: 63,
      name: 'abra',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png',
    },
    {
      id: 64,
      name: 'kadabra',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png',
    },
    {
      id: 65,
      name: 'alakazam',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png',
    },
    {
      id: 66,
      name: 'machop',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png',
    },
    {
      id: 67,
      name: 'machoke',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png',
    },
    {
      id: 68,
      name: 'machamp',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png',
    },
    {
      id: 69,
      name: 'bellsprout',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png',
    },
    {
      id: 70,
      name: 'weepinbell',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png',
    },
    {
      id: 71,
      name: 'victreebel',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png',
    },
    {
      id: 72,
      name: 'tentacool',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png',
    },
    {
      id: 73,
      name: 'tentacruel',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png',
    },
    {
      id: 74,
      name: 'geodude',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png',
    },
    {
      id: 75,
      name: 'graveler',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png',
    },
    {
      id: 76,
      name: 'golem',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png',
    },
    {
      id: 77,
      name: 'ponyta',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png',
    },
    {
      id: 78,
      name: 'rapidash',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png',
    },
    {
      id: 79,
      name: 'slowpoke',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png',
    },
    {
      id: 80,
      name: 'slowbro',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png',
    },
    {
      id: 81,
      name: 'magnemite',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png',
    },
    {
      id: 82,
      name: 'magneton',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png',
    },
    {
      id: 83,
      name: 'farfetchd',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png',
    },
    {
      id: 84,
      name: 'doduo',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png',
    },
    {
      id: 85,
      name: 'dodrio',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png',
    },
    {
      id: 86,
      name: 'seel',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png',
    },
    {
      id: 87,
      name: 'dewgong',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png',
    },
    {
      id: 88,
      name: 'grimer',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png',
    },
    {
      id: 89,
      name: 'muk',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png',
    },
    {
      id: 90,
      name: 'shellder',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png',
    },
    {
      id: 91,
      name: 'cloyster',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png',
    },
    {
      id: 92,
      name: 'gastly',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png',
    },
    {
      id: 93,
      name: 'haunter',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png',
    },
    {
      id: 94,
      name: 'gengar',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
    },
    {
      id: 95,
      name: 'onix',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png',
    },
    {
      id: 96,
      name: 'drowzee',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png',
    },
    {
      id: 97,
      name: 'hypno',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png',
    },
    {
      id: 98,
      name: 'krabby',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png',
    },
    {
      id: 99,
      name: 'kingler',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png',
    },
    {
      id: 100,
      name: 'voltorb',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png',
    },
    {
      id: 101,
      name: 'electrode',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png',
    },
    {
      id: 102,
      name: 'exeggcute',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png',
    },
    {
      id: 103,
      name: 'exeggutor',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png',
    },
    {
      id: 104,
      name: 'cubone',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png',
    },
    {
      id: 105,
      name: 'marowak',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png',
    },
    {
      id: 106,
      name: 'hitmonlee',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png',
    },
    {
      id: 107,
      name: 'hitmonchan',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png',
    },
    {
      id: 108,
      name: 'lickitung',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png',
    },
    {
      id: 109,
      name: 'koffing',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png',
    },
    {
      id: 110,
      name: 'weezing',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png',
    },
    {
      id: 111,
      name: 'rhyhorn',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png',
    },
    {
      id: 112,
      name: 'rhydon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png',
    },
    {
      id: 113,
      name: 'chansey',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png',
    },
    {
      id: 114,
      name: 'tangela',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png',
    },
    {
      id: 115,
      name: 'kangaskhan',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png',
    },
    {
      id: 116,
      name: 'horsea',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png',
    },
    {
      id: 117,
      name: 'seadra',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png',
    },
    {
      id: 118,
      name: 'goldeen',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png',
    },
    {
      id: 119,
      name: 'seaking',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png',
    },
    {
      id: 120,
      name: 'staryu',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png',
    },
    {
      id: 121,
      name: 'starmie',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png',
    },
    {
      id: 122,
      name: 'mr-mime',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png',
    },
    {
      id: 123,
      name: 'scyther',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png',
    },
    {
      id: 124,
      name: 'jynx',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png',
    },
    {
      id: 125,
      name: 'electabuzz',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png',
    },
    {
      id: 126,
      name: 'magmar',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png',
    },
    {
      id: 127,
      name: 'pinsir',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png',
    },
    {
      id: 128,
      name: 'tauros',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png',
    },
    {
      id: 129,
      name: 'magikarp',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png',
    },
    {
      id: 130,
      name: 'gyarados',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png',
    },
    {
      id: 131,
      name: 'lapras',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png',
    },
    {
      id: 132,
      name: 'ditto',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    },
    {
      id: 133,
      name: 'eevee',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
    },
    {
      id: 134,
      name: 'vaporeon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png',
    },
    {
      id: 135,
      name: 'jolteon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png',
    },
    {
      id: 136,
      name: 'flareon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png',
    },
    {
      id: 137,
      name: 'porygon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png',
    },
    {
      id: 138,
      name: 'omanyte',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png',
    },
    {
      id: 139,
      name: 'omastar',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png',
    },
    {
      id: 140,
      name: 'kabuto',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png',
    },
    {
      id: 141,
      name: 'kabutops',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png',
    },
    {
      id: 142,
      name: 'aerodactyl',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png',
    },
    {
      id: 143,
      name: 'snorlax',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
    },
    {
      id: 144,
      name: 'articuno',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png',
    },
    {
      id: 145,
      name: 'zapdos',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png',
    },
    {
      id: 146,
      name: 'moltres',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png',
    },
    {
      id: 147,
      name: 'dratini',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png',
    },
    {
      id: 148,
      name: 'dragonair',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png',
    },
    {
      id: 149,
      name: 'dragonite',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png',
    },
    {
      id: 150,
      name: 'mewtwo',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
    },
    {
      id: 151,
      name: 'mew',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png',
    },
    {
      id: 152,
      name: 'chikorita',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png',
    },
    {
      id: 153,
      name: 'bayleef',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png',
    },
    {
      id: 154,
      name: 'meganium',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png',
    },
    {
      id: 155,
      name: 'cyndaquil',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png',
    },
    {
      id: 156,
      name: 'quilava',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png',
    },
    {
      id: 157,
      name: 'typhlosion',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png',
    },
    {
      id: 158,
      name: 'totodile',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png',
    },
    {
      id: 159,
      name: 'croconaw',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png',
    },
    {
      id: 160,
      name: 'feraligatr',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png',
    },
    {
      id: 161,
      name: 'sentret',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png',
    },
    {
      id: 162,
      name: 'furret',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png',
    },
    {
      id: 163,
      name: 'hoothoot',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png',
    },
    {
      id: 164,
      name: 'noctowl',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png',
    },
    {
      id: 165,
      name: 'ledyba',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png',
    },
    {
      id: 166,
      name: 'ledian',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png',
    },
    {
      id: 167,
      name: 'spinarak',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png',
    },
    {
      id: 168,
      name: 'ariados',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png',
    },
    {
      id: 169,
      name: 'crobat',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png',
    },
    {
      id: 170,
      name: 'chinchou',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png',
    },
    {
      id: 171,
      name: 'lanturn',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png',
    },
    {
      id: 172,
      name: 'pichu',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png',
    },
    {
      id: 173,
      name: 'cleffa',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png',
    },
    {
      id: 174,
      name: 'igglybuff',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png',
    },
    {
      id: 175,
      name: 'togepi',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png',
    },
    {
      id: 176,
      name: 'togetic',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png',
    },
    {
      id: 177,
      name: 'natu',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png',
    },
    {
      id: 178,
      name: 'xatu',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png',
    },
    {
      id: 179,
      name: 'mareep',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png',
    },
    {
      id: 180,
      name: 'flaaffy',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png',
    },
    {
      id: 181,
      name: 'ampharos',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png',
    },
    {
      id: 182,
      name: 'bellossom',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png',
    },
    {
      id: 183,
      name: 'marill',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png',
    },
    {
      id: 184,
      name: 'azumarill',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png',
    },
    {
      id: 185,
      name: 'sudowoodo',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png',
    },
    {
      id: 186,
      name: 'politoed',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png',
    },
    {
      id: 187,
      name: 'hoppip',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png',
    },
    {
      id: 188,
      name: 'skiploom',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png',
    },
    {
      id: 189,
      name: 'jumpluff',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png',
    },
    {
      id: 190,
      name: 'aipom',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png',
    },
    {
      id: 191,
      name: 'sunkern',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png',
    },
    {
      id: 192,
      name: 'sunflora',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png',
    },
    {
      id: 193,
      name: 'yanma',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png',
    },
    {
      id: 194,
      name: 'wooper',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png',
    },
    {
      id: 195,
      name: 'quagsire',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png',
    },
    {
      id: 196,
      name: 'espeon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png',
    },
    {
      id: 197,
      name: 'umbreon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png',
    },
    {
      id: 198,
      name: 'murkrow',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png',
    },
    {
      id: 199,
      name: 'slowking',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png',
    },
    {
      id: 200,
      name: 'misdreavus',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png',
    },
    {
      id: 201,
      name: 'unown',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png',
    },
    {
      id: 202,
      name: 'wobbuffet',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png',
    },
    {
      id: 203,
      name: 'girafarig',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png',
    },
    {
      id: 204,
      name: 'pineco',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png',
    },
    {
      id: 205,
      name: 'forretress',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png',
    },
    {
      id: 206,
      name: 'dunsparce',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png',
    },
    {
      id: 207,
      name: 'gligar',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png',
    },
    {
      id: 208,
      name: 'steelix',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png',
    },
    {
      id: 209,
      name: 'snubbull',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png',
    },
    {
      id: 210,
      name: 'granbull',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png',
    },
    {
      id: 211,
      name: 'qwilfish',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png',
    },
    {
      id: 212,
      name: 'scizor',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png',
    },
    {
      id: 213,
      name: 'shuckle',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png',
    },
    {
      id: 214,
      name: 'heracross',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png',
    },
    {
      id: 215,
      name: 'sneasel',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png',
    },
    {
      id: 216,
      name: 'teddiursa',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png',
    },
    {
      id: 217,
      name: 'ursaring',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png',
    },
    {
      id: 218,
      name: 'slugma',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png',
    },
    {
      id: 219,
      name: 'magcargo',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png',
    },
    {
      id: 220,
      name: 'swinub',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png',
    },
    {
      id: 221,
      name: 'piloswine',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png',
    },
    {
      id: 222,
      name: 'corsola',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png',
    },
    {
      id: 223,
      name: 'remoraid',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png',
    },
    {
      id: 224,
      name: 'octillery',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png',
    },
    {
      id: 225,
      name: 'delibird',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png',
    },
    {
      id: 226,
      name: 'mantine',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png',
    },
    {
      id: 227,
      name: 'skarmory',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png',
    },
    {
      id: 228,
      name: 'houndour',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png',
    },
    {
      id: 229,
      name: 'houndoom',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png',
    },
    {
      id: 230,
      name: 'kingdra',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png',
    },
    {
      id: 231,
      name: 'phanpy',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png',
    },
    {
      id: 232,
      name: 'donphan',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png',
    },
    {
      id: 233,
      name: 'porygon2',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png',
    },
    {
      id: 234,
      name: 'stantler',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png',
    },
    {
      id: 235,
      name: 'smeargle',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png',
    },
    {
      id: 236,
      name: 'tyrogue',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png',
    },
    {
      id: 237,
      name: 'hitmontop',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png',
    },
    {
      id: 238,
      name: 'smoochum',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png',
    },
    {
      id: 239,
      name: 'elekid',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png',
    },
    {
      id: 240,
      name: 'magby',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png',
    },
    {
      id: 241,
      name: 'miltank',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png',
    },
    {
      id: 242,
      name: 'blissey',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png',
    },
    {
      id: 243,
      name: 'raikou',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png',
    },
    {
      id: 244,
      name: 'entei',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png',
    },
    {
      id: 245,
      name: 'suicune',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png',
    },
    {
      id: 246,
      name: 'larvitar',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png',
    },
    {
      id: 247,
      name: 'pupitar',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png',
    },
    {
      id: 248,
      name: 'tyranitar',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png',
    },
    {
      id: 249,
      name: 'lugia',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png',
    },
    {
      id: 250,
      name: 'ho-oh',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png',
    },
    {
      id: 251,
      name: 'celebi',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png',
    },
    {
      id: 252,
      name: 'treecko',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png',
    },
    {
      id: 253,
      name: 'grovyle',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png',
    },
    {
      id: 254,
      name: 'sceptile',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png',
    },
    {
      id: 255,
      name: 'torchic',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png',
    },
    {
      id: 256,
      name: 'combusken',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png',
    },
    {
      id: 257,
      name: 'blaziken',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png',
    },
    {
      id: 258,
      name: 'mudkip',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png',
    },
    {
      id: 259,
      name: 'marshtomp',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png',
    },
    {
      id: 260,
      name: 'swampert',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png',
    },
    {
      id: 261,
      name: 'poochyena',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png',
    },
    {
      id: 262,
      name: 'mightyena',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png',
    },
    {
      id: 263,
      name: 'zigzagoon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png',
    },
    {
      id: 264,
      name: 'linoone',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png',
    },
    {
      id: 265,
      name: 'wurmple',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png',
    },
    {
      id: 266,
      name: 'silcoon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png',
    },
    {
      id: 267,
      name: 'beautifly',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png',
    },
    {
      id: 268,
      name: 'cascoon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png',
    },
    {
      id: 269,
      name: 'dustox',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png',
    },
    {
      id: 270,
      name: 'lotad',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png',
    },
    {
      id: 271,
      name: 'lombre',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png',
    },
    {
      id: 272,
      name: 'ludicolo',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png',
    },
    {
      id: 273,
      name: 'seedot',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png',
    },
    {
      id: 274,
      name: 'nuzleaf',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png',
    },
    {
      id: 275,
      name: 'shiftry',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png',
    },
    {
      id: 276,
      name: 'taillow',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png',
    },
    {
      id: 277,
      name: 'swellow',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png',
    },
    {
      id: 278,
      name: 'wingull',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png',
    },
    {
      id: 279,
      name: 'pelipper',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png',
    },
    {
      id: 280,
      name: 'ralts',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png',
    },
    {
      id: 281,
      name: 'kirlia',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png',
    },
    {
      id: 282,
      name: 'gardevoir',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png',
    },
    {
      id: 283,
      name: 'surskit',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png',
    },
    {
      id: 284,
      name: 'masquerain',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png',
    },
    {
      id: 285,
      name: 'shroomish',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png',
    },
    {
      id: 286,
      name: 'breloom',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png',
    },
    {
      id: 287,
      name: 'slakoth',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png',
    },
    {
      id: 288,
      name: 'vigoroth',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png',
    },
    {
      id: 289,
      name: 'slaking',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png',
    },
    {
      id: 290,
      name: 'nincada',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png',
    },
    {
      id: 291,
      name: 'ninjask',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png',
    },
    {
      id: 292,
      name: 'shedinja',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png',
    },
    {
      id: 293,
      name: 'whismur',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png',
    },
    {
      id: 294,
      name: 'loudred',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png',
    },
    {
      id: 295,
      name: 'exploud',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png',
    },
    {
      id: 296,
      name: 'makuhita',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png',
    },
    {
      id: 297,
      name: 'hariyama',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png',
    },
    {
      id: 298,
      name: 'azurill',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png',
    },
    {
      id: 299,
      name: 'nosepass',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png',
    },
    {
      id: 300,
      name: 'skitty',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png',
    },
    {
      id: 301,
      name: 'delcatty',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png',
    },
    {
      id: 302,
      name: 'sableye',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png',
    },
    {
      id: 303,
      name: 'mawile',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png',
    },
    {
      id: 304,
      name: 'aron',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png',
    },
    {
      id: 305,
      name: 'lairon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png',
    },
    {
      id: 306,
      name: 'aggron',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png',
    },
    {
      id: 307,
      name: 'meditite',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png',
    },
    {
      id: 308,
      name: 'medicham',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png',
    },
    {
      id: 309,
      name: 'electrike',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png',
    },
    {
      id: 310,
      name: 'manectric',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png',
    },
    {
      id: 311,
      name: 'plusle',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png',
    },
    {
      id: 312,
      name: 'minun',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png',
    },
    {
      id: 313,
      name: 'volbeat',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png',
    },
    {
      id: 314,
      name: 'illumise',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png',
    },
    {
      id: 315,
      name: 'roselia',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png',
    },
    {
      id: 316,
      name: 'gulpin',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png',
    },
    {
      id: 317,
      name: 'swalot',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png',
    },
    {
      id: 318,
      name: 'carvanha',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png',
    },
    {
      id: 319,
      name: 'sharpedo',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png',
    },
    {
      id: 320,
      name: 'wailmer',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png',
    },
    {
      id: 321,
      name: 'wailord',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png',
    },
    {
      id: 322,
      name: 'numel',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png',
    },
    {
      id: 323,
      name: 'camerupt',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png',
    },
    {
      id: 324,
      name: 'torkoal',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png',
    },
    {
      id: 325,
      name: 'spoink',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png',
    },
    {
      id: 326,
      name: 'grumpig',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png',
    },
    {
      id: 327,
      name: 'spinda',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png',
    },
    {
      id: 328,
      name: 'trapinch',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png',
    },
    {
      id: 329,
      name: 'vibrava',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png',
    },
    {
      id: 330,
      name: 'flygon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png',
    },
    {
      id: 331,
      name: 'cacnea',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png',
    },
    {
      id: 332,
      name: 'cacturne',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png',
    },
    {
      id: 333,
      name: 'swablu',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png',
    },
    {
      id: 334,
      name: 'altaria',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png',
    },
    {
      id: 335,
      name: 'zangoose',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png',
    },
    {
      id: 336,
      name: 'seviper',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png',
    },
    {
      id: 337,
      name: 'lunatone',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png',
    },
    {
      id: 338,
      name: 'solrock',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png',
    },
    {
      id: 339,
      name: 'barboach',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png',
    },
    {
      id: 340,
      name: 'whiscash',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png',
    },
    {
      id: 341,
      name: 'corphish',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png',
    },
    {
      id: 342,
      name: 'crawdaunt',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png',
    },
    {
      id: 343,
      name: 'baltoy',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png',
    },
    {
      id: 344,
      name: 'claydol',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png',
    },
    {
      id: 345,
      name: 'lileep',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png',
    },
    {
      id: 346,
      name: 'cradily',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png',
    },
    {
      id: 347,
      name: 'anorith',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png',
    },
    {
      id: 348,
      name: 'armaldo',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png',
    },
    {
      id: 349,
      name: 'feebas',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png',
    },
    {
      id: 350,
      name: 'milotic',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png',
    },
    {
      id: 351,
      name: 'castform',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png',
    },
    {
      id: 352,
      name: 'kecleon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png',
    },
    {
      id: 353,
      name: 'shuppet',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png',
    },
    {
      id: 354,
      name: 'banette',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png',
    },
    {
      id: 355,
      name: 'duskull',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png',
    },
    {
      id: 356,
      name: 'dusclops',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png',
    },
    {
      id: 357,
      name: 'tropius',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png',
    },
    {
      id: 358,
      name: 'chimecho',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png',
    },
    {
      id: 359,
      name: 'absol',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png',
    },
    {
      id: 360,
      name: 'wynaut',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png',
    },
    {
      id: 361,
      name: 'snorunt',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png',
    },
    {
      id: 362,
      name: 'glalie',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png',
    },
    {
      id: 363,
      name: 'spheal',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png',
    },
    {
      id: 364,
      name: 'sealeo',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png',
    },
    {
      id: 365,
      name: 'walrein',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png',
    },
    {
      id: 366,
      name: 'clamperl',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png',
    },
    {
      id: 367,
      name: 'huntail',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png',
    },
    {
      id: 368,
      name: 'gorebyss',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png',
    },
    {
      id: 369,
      name: 'relicanth',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png',
    },
    {
      id: 370,
      name: 'luvdisc',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png',
    },
    {
      id: 371,
      name: 'bagon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png',
    },
    {
      id: 372,
      name: 'shelgon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png',
    },
    {
      id: 373,
      name: 'salamence',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png',
    },
    {
      id: 374,
      name: 'beldum',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png',
    },
    {
      id: 375,
      name: 'metang',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png',
    },
    {
      id: 376,
      name: 'metagross',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png',
    },
    {
      id: 377,
      name: 'regirock',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png',
    },
    {
      id: 378,
      name: 'regice',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png',
    },
    {
      id: 379,
      name: 'registeel',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png',
    },
    {
      id: 380,
      name: 'latias',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png',
    },
    {
      id: 381,
      name: 'latios',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png',
    },
    {
      id: 382,
      name: 'kyogre',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png',
    },
    {
      id: 383,
      name: 'groudon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png',
    },
    {
      id: 384,
      name: 'rayquaza',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png',
    },
    {
      id: 385,
      name: 'jirachi',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png',
    },
    {
      id: 386,
      name: 'deoxys-normal',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png',
    },
    {
      id: 387,
      name: 'turtwig',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png',
    },
    {
      id: 388,
      name: 'grotle',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png',
    },
    {
      id: 389,
      name: 'torterra',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png',
    },
    {
      id: 390,
      name: 'chimchar',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png',
    },
    {
      id: 391,
      name: 'monferno',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png',
    },
    {
      id: 392,
      name: 'infernape',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png',
    },
    {
      id: 393,
      name: 'piplup',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png',
    },
    {
      id: 394,
      name: 'prinplup',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png',
    },
    {
      id: 395,
      name: 'empoleon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png',
    },
    {
      id: 396,
      name: 'starly',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png',
    },
    {
      id: 397,
      name: 'staravia',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png',
    },
    {
      id: 398,
      name: 'staraptor',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png',
    },
    {
      id: 399,
      name: 'bidoof',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png',
    },
    {
      id: 400,
      name: 'bibarel',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png',
    },
    {
      id: 401,
      name: 'kricketot',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png',
    },
    {
      id: 402,
      name: 'kricketune',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png',
    },
    {
      id: 403,
      name: 'shinx',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png',
    },
    {
      id: 404,
      name: 'luxio',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png',
    },
    {
      id: 405,
      name: 'luxray',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png',
    },
    {
      id: 406,
      name: 'budew',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png',
    },
    {
      id: 407,
      name: 'roserade',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png',
    },
    {
      id: 408,
      name: 'cranidos',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png',
    },
    {
      id: 409,
      name: 'rampardos',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png',
    },
    {
      id: 410,
      name: 'shieldon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png',
    },
    {
      id: 411,
      name: 'bastiodon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png',
    },
    {
      id: 412,
      name: 'burmy',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png',
    },
    {
      id: 413,
      name: 'wormadam-plant',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png',
    },
    {
      id: 414,
      name: 'mothim',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png',
    },
    {
      id: 415,
      name: 'combee',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png',
    },
    {
      id: 416,
      name: 'vespiquen',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png',
    },
    {
      id: 417,
      name: 'pachirisu',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png',
    },
    {
      id: 418,
      name: 'buizel',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png',
    },
    {
      id: 419,
      name: 'floatzel',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png',
    },
    {
      id: 420,
      name: 'cherubi',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png',
    },
    {
      id: 421,
      name: 'cherrim',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png',
    },
    {
      id: 422,
      name: 'shellos',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png',
    },
    {
      id: 423,
      name: 'gastrodon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png',
    },
    {
      id: 424,
      name: 'ambipom',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png',
    },
    {
      id: 425,
      name: 'drifloon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png',
    },
    {
      id: 426,
      name: 'drifblim',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png',
    },
    {
      id: 427,
      name: 'buneary',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png',
    },
    {
      id: 428,
      name: 'lopunny',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png',
    },
    {
      id: 429,
      name: 'mismagius',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png',
    },
    {
      id: 430,
      name: 'honchkrow',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png',
    },
    {
      id: 431,
      name: 'glameow',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png',
    },
    {
      id: 432,
      name: 'purugly',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png',
    },
    {
      id: 433,
      name: 'chingling',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png',
    },
    {
      id: 434,
      name: 'stunky',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png',
    },
    {
      id: 435,
      name: 'skuntank',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png',
    },
    {
      id: 436,
      name: 'bronzor',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png',
    },
    {
      id: 437,
      name: 'bronzong',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png',
    },
    {
      id: 438,
      name: 'bonsly',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png',
    },
    {
      id: 439,
      name: 'mime-jr',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png',
    },
    {
      id: 440,
      name: 'happiny',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png',
    },
    {
      id: 441,
      name: 'chatot',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png',
    },
    {
      id: 442,
      name: 'spiritomb',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png',
    },
    {
      id: 443,
      name: 'gible',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png',
    },
    {
      id: 444,
      name: 'gabite',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png',
    },
    {
      id: 445,
      name: 'garchomp',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png',
    },
    {
      id: 446,
      name: 'munchlax',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png',
    },
    {
      id: 447,
      name: 'riolu',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png',
    },
    {
      id: 448,
      name: 'lucario',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png',
    },
    {
      id: 449,
      name: 'hippopotas',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png',
    },
    {
      id: 450,
      name: 'hippowdon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png',
    },
    {
      id: 451,
      name: 'skorupi',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png',
    },
    {
      id: 452,
      name: 'drapion',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png',
    },
    {
      id: 453,
      name: 'croagunk',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png',
    },
    {
      id: 454,
      name: 'toxicroak',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png',
    },
    {
      id: 455,
      name: 'carnivine',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png',
    },
    {
      id: 456,
      name: 'finneon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png',
    },
    {
      id: 457,
      name: 'lumineon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png',
    },
    {
      id: 458,
      name: 'mantyke',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png',
    },
    {
      id: 459,
      name: 'snover',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png',
    },
    {
      id: 460,
      name: 'abomasnow',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png',
    },
    {
      id: 461,
      name: 'weavile',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png',
    },
    {
      id: 462,
      name: 'magnezone',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png',
    },
    {
      id: 463,
      name: 'lickilicky',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png',
    },
    {
      id: 464,
      name: 'rhyperior',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png',
    },
    {
      id: 465,
      name: 'tangrowth',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png',
    },
    {
      id: 466,
      name: 'electivire',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png',
    },
    {
      id: 467,
      name: 'magmortar',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png',
    },
    {
      id: 468,
      name: 'togekiss',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png',
    },
    {
      id: 469,
      name: 'yanmega',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png',
    },
    {
      id: 470,
      name: 'leafeon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png',
    },
    {
      id: 471,
      name: 'glaceon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png',
    },
    {
      id: 472,
      name: 'gliscor',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png',
    },
    {
      id: 473,
      name: 'mamoswine',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png',
    },
    {
      id: 474,
      name: 'porygon-z',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png',
    },
    {
      id: 475,
      name: 'gallade',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png',
    },
    {
      id: 476,
      name: 'probopass',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png',
    },
    {
      id: 477,
      name: 'dusknoir',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png',
    },
    {
      id: 478,
      name: 'froslass',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png',
    },
    {
      id: 479,
      name: 'rotom',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png',
    },
    {
      id: 480,
      name: 'uxie',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png',
    },
    {
      id: 481,
      name: 'mesprit',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png',
    },
    {
      id: 482,
      name: 'azelf',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png',
    },
    {
      id: 483,
      name: 'dialga',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png',
    },
    {
      id: 484,
      name: 'palkia',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png',
    },
    {
      id: 485,
      name: 'heatran',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png',
    },
    {
      id: 486,
      name: 'regigigas',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png',
    },
    {
      id: 487,
      name: 'giratina-altered',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png',
    },
    {
      id: 488,
      name: 'cresselia',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png',
    },
    {
      id: 489,
      name: 'phione',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png',
    },
    {
      id: 490,
      name: 'manaphy',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png',
    },
    {
      id: 491,
      name: 'darkrai',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png',
    },
    {
      id: 492,
      name: 'shaymin-land',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png',
    },
    {
      id: 493,
      name: 'arceus',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png',
    },
    {
      id: 494,
      name: 'victini',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png',
    },
    {
      id: 495,
      name: 'snivy',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png',
    },
    {
      id: 496,
      name: 'servine',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png',
    },
    {
      id: 497,
      name: 'serperior',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png',
    },
    {
      id: 498,
      name: 'tepig',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png',
    },
    {
      id: 499,
      name: 'pignite',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png',
    },
    {
      id: 500,
      name: 'emboar',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png',
    },
    {
      id: 501,
      name: 'oshawott',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png',
    },
    {
      id: 502,
      name: 'dewott',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png',
    },
    {
      id: 503,
      name: 'samurott',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png',
    },
    {
      id: 504,
      name: 'patrat',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/504.png',
    },
    {
      id: 505,
      name: 'watchog',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png',
    },
    {
      id: 506,
      name: 'lillipup',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png',
    },
    {
      id: 507,
      name: 'herdier',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/507.png',
    },
    {
      id: 508,
      name: 'stoutland',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png',
    },
    {
      id: 509,
      name: 'purrloin',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/509.png',
    },
    {
      id: 510,
      name: 'liepard',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png',
    },
    {
      id: 511,
      name: 'pansage',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/511.png',
    },
    {
      id: 512,
      name: 'simisage',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png',
    },
    {
      id: 513,
      name: 'pansear',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/513.png',
    },
    {
      id: 514,
      name: 'simisear',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png',
    },
    {
      id: 515,
      name: 'panpour',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/515.png',
    },
    {
      id: 516,
      name: 'simipour',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png',
    },
    {
      id: 517,
      name: 'munna',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/517.png',
    },
    {
      id: 518,
      name: 'musharna',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png',
    },
    {
      id: 519,
      name: 'pidove',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/519.png',
    },
    {
      id: 520,
      name: 'tranquill',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/520.png',
    },
    {
      id: 521,
      name: 'unfezant',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png',
    },
    {
      id: 522,
      name: 'blitzle',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/522.png',
    },
    {
      id: 523,
      name: 'zebstrika',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png',
    },
    {
      id: 524,
      name: 'roggenrola',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/524.png',
    },
    {
      id: 525,
      name: 'boldore',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/525.png',
    },
    {
      id: 526,
      name: 'gigalith',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png',
    },
    {
      id: 527,
      name: 'woobat',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/527.png',
    },
    {
      id: 528,
      name: 'swoobat',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png',
    },
    {
      id: 529,
      name: 'drilbur',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png',
    },
    {
      id: 530,
      name: 'excadrill',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png',
    },
    {
      id: 531,
      name: 'audino',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png',
    },
    {
      id: 532,
      name: 'timburr',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png',
    },
    {
      id: 533,
      name: 'gurdurr',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png',
    },
    {
      id: 534,
      name: 'conkeldurr',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png',
    },
    {
      id: 535,
      name: 'tympole',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/535.png',
    },
    {
      id: 536,
      name: 'palpitoad',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/536.png',
    },
    {
      id: 537,
      name: 'seismitoad',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png',
    },
    {
      id: 538,
      name: 'throh',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png',
    },
    {
      id: 539,
      name: 'sawk',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png',
    },
    {
      id: 540,
      name: 'sewaddle',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png',
    },
    {
      id: 541,
      name: 'swadloon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png',
    },
    {
      id: 542,
      name: 'leavanny',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png',
    },
    {
      id: 543,
      name: 'venipede',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/543.png',
    },
    {
      id: 544,
      name: 'whirlipede',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png',
    },
    {
      id: 545,
      name: 'scolipede',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png',
    },
    {
      id: 546,
      name: 'cottonee',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png',
    },
    {
      id: 547,
      name: 'whimsicott',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png',
    },
    {
      id: 548,
      name: 'petilil',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/548.png',
    },
    {
      id: 549,
      name: 'lilligant',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png',
    },
    {
      id: 550,
      name: 'basculin-red-striped',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png',
    },
    {
      id: 551,
      name: 'sandile',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png',
    },
    {
      id: 552,
      name: 'krokorok',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/552.png',
    },
    {
      id: 553,
      name: 'krookodile',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png',
    },
    {
      id: 554,
      name: 'darumaka',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/554.png',
    },
    {
      id: 555,
      name: 'darmanitan-standard',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png',
    },
    {
      id: 556,
      name: 'maractus',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png',
    },
    {
      id: 557,
      name: 'dwebble',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/557.png',
    },
    {
      id: 558,
      name: 'crustle',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png',
    },
    {
      id: 559,
      name: 'scraggy',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png',
    },
    {
      id: 560,
      name: 'scrafty',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png',
    },
    {
      id: 561,
      name: 'sigilyph',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png',
    },
    {
      id: 562,
      name: 'yamask',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png',
    },
    {
      id: 563,
      name: 'cofagrigus',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png',
    },
    {
      id: 564,
      name: 'tirtouga',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/564.png',
    },
    {
      id: 565,
      name: 'carracosta',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png',
    },
    {
      id: 566,
      name: 'archen',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png',
    },
    {
      id: 567,
      name: 'archeops',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png',
    },
    {
      id: 568,
      name: 'trubbish',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png',
    },
    {
      id: 569,
      name: 'garbodor',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png',
    },
    {
      id: 570,
      name: 'zorua',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png',
    },
    {
      id: 571,
      name: 'zoroark',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png',
    },
    {
      id: 572,
      name: 'minccino',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png',
    },
    {
      id: 573,
      name: 'cinccino',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png',
    },
    {
      id: 574,
      name: 'gothita',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png',
    },
    {
      id: 575,
      name: 'gothorita',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png',
    },
    {
      id: 576,
      name: 'gothitelle',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png',
    },
    {
      id: 577,
      name: 'solosis',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png',
    },
    {
      id: 578,
      name: 'duosion',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/578.png',
    },
    {
      id: 579,
      name: 'reuniclus',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png',
    },
    {
      id: 580,
      name: 'ducklett',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/580.png',
    },
    {
      id: 581,
      name: 'swanna',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png',
    },
    {
      id: 582,
      name: 'vanillite',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/582.png',
    },
    {
      id: 583,
      name: 'vanillish',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/583.png',
    },
    {
      id: 584,
      name: 'vanilluxe',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png',
    },
    {
      id: 585,
      name: 'deerling',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/585.png',
    },
    {
      id: 586,
      name: 'sawsbuck',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png',
    },
    {
      id: 587,
      name: 'emolga',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png',
    },
    {
      id: 588,
      name: 'karrablast',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/588.png',
    },
    {
      id: 589,
      name: 'escavalier',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png',
    },
    {
      id: 590,
      name: 'foongus',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png',
    },
    {
      id: 591,
      name: 'amoonguss',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png',
    },
    {
      id: 592,
      name: 'frillish',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/592.png',
    },
    {
      id: 593,
      name: 'jellicent',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png',
    },
    {
      id: 594,
      name: 'alomomola',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png',
    },
    {
      id: 595,
      name: 'joltik',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png',
    },
    {
      id: 596,
      name: 'galvantula',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png',
    },
    {
      id: 597,
      name: 'ferroseed',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/597.png',
    },
    {
      id: 598,
      name: 'ferrothorn',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png',
    },
    {
      id: 599,
      name: 'klink',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/599.png',
    },
    {
      id: 600,
      name: 'klang',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png',
    },
    {
      id: 601,
      name: 'klinklang',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png',
    },
    {
      id: 602,
      name: 'tynamo',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/602.png',
    },
    {
      id: 603,
      name: 'eelektrik',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/603.png',
    },
    {
      id: 604,
      name: 'eelektross',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png',
    },
    {
      id: 605,
      name: 'elgyem',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/605.png',
    },
    {
      id: 606,
      name: 'beheeyem',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png',
    },
    {
      id: 607,
      name: 'litwick',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png',
    },
    {
      id: 608,
      name: 'lampent',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png',
    },
    {
      id: 609,
      name: 'chandelure',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png',
    },
    {
      id: 610,
      name: 'axew',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png',
    },
    {
      id: 611,
      name: 'fraxure',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/611.png',
    },
    {
      id: 612,
      name: 'haxorus',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png',
    },
    {
      id: 613,
      name: 'cubchoo',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/613.png',
    },
    {
      id: 614,
      name: 'beartic',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png',
    },
    {
      id: 615,
      name: 'cryogonal',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png',
    },
    {
      id: 616,
      name: 'shelmet',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png',
    },
    {
      id: 617,
      name: 'accelgor',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png',
    },
    {
      id: 618,
      name: 'stunfisk',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png',
    },
    {
      id: 619,
      name: 'mienfoo',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/619.png',
    },
    {
      id: 620,
      name: 'mienshao',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png',
    },
    {
      id: 621,
      name: 'druddigon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png',
    },
    {
      id: 622,
      name: 'golett',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/622.png',
    },
    {
      id: 623,
      name: 'golurk',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png',
    },
    {
      id: 624,
      name: 'pawniard',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/624.png',
    },
    {
      id: 625,
      name: 'bisharp',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png',
    },
    {
      id: 626,
      name: 'bouffalant',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png',
    },
    {
      id: 627,
      name: 'rufflet',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/627.png',
    },
    {
      id: 628,
      name: 'braviary',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png',
    },
    {
      id: 629,
      name: 'vullaby',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/629.png',
    },
    {
      id: 630,
      name: 'mandibuzz',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png',
    },
    {
      id: 631,
      name: 'heatmor',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png',
    },
    {
      id: 632,
      name: 'durant',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png',
    },
    {
      id: 633,
      name: 'deino',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png',
    },
    {
      id: 634,
      name: 'zweilous',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/634.png',
    },
    {
      id: 635,
      name: 'hydreigon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png',
    },
    {
      id: 636,
      name: 'larvesta',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png',
    },
    {
      id: 637,
      name: 'volcarona',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png',
    },
    {
      id: 638,
      name: 'cobalion',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png',
    },
    {
      id: 639,
      name: 'terrakion',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png',
    },
    {
      id: 640,
      name: 'virizion',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png',
    },
    {
      id: 641,
      name: 'tornadus-incarnate',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png',
    },
    {
      id: 642,
      name: 'thundurus-incarnate',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/642.png',
    },
    {
      id: 643,
      name: 'reshiram',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png',
    },
    {
      id: 644,
      name: 'zekrom',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png',
    },
    {
      id: 645,
      name: 'landorus-incarnate',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645.png',
    },
    {
      id: 646,
      name: 'kyurem',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png',
    },
    {
      id: 647,
      name: 'keldeo-ordinary',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/647.png',
    },
    {
      id: 648,
      name: 'meloetta-aria',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/648.png',
    },
    {
      id: 649,
      name: 'genesect',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png',
    },
    {
      id: 650,
      name: 'chespin',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png',
    },
    {
      id: 651,
      name: 'quilladin',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png',
    },
    {
      id: 652,
      name: 'chesnaught',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png',
    },
    {
      id: 653,
      name: 'fennekin',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png',
    },
    {
      id: 654,
      name: 'braixen',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png',
    },
    {
      id: 655,
      name: 'delphox',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png',
    },
    {
      id: 656,
      name: 'froakie',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png',
    },
    {
      id: 657,
      name: 'frogadier',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png',
    },
    {
      id: 658,
      name: 'greninja',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png',
    },
    {
      id: 659,
      name: 'bunnelby',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/659.png',
    },
    {
      id: 660,
      name: 'diggersby',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png',
    },
    {
      id: 661,
      name: 'fletchling',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/661.png',
    },
    {
      id: 662,
      name: 'fletchinder',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png',
    },
    {
      id: 663,
      name: 'talonflame',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png',
    },
    {
      id: 664,
      name: 'scatterbug',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png',
    },
    {
      id: 665,
      name: 'spewpa',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/665.png',
    },
    {
      id: 666,
      name: 'vivillon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png',
    },
    {
      id: 667,
      name: 'litleo',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png',
    },
    {
      id: 668,
      name: 'pyroar',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png',
    },
    {
      id: 669,
      name: 'flabebe',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png',
    },
    {
      id: 670,
      name: 'floette',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png',
    },
    {
      id: 671,
      name: 'florges',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png',
    },
    {
      id: 672,
      name: 'skiddo',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/672.png',
    },
    {
      id: 673,
      name: 'gogoat',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png',
    },
    {
      id: 674,
      name: 'pancham',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png',
    },
    {
      id: 675,
      name: 'pangoro',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png',
    },
    {
      id: 676,
      name: 'furfrou',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/676.png',
    },
    {
      id: 677,
      name: 'espurr',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png',
    },
    {
      id: 678,
      name: 'meowstic-male',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/678.png',
    },
    {
      id: 679,
      name: 'honedge',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png',
    },
    {
      id: 680,
      name: 'doublade',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/680.png',
    },
    {
      id: 681,
      name: 'aegislash-shield',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png',
    },
    {
      id: 682,
      name: 'spritzee',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/682.png',
    },
    {
      id: 683,
      name: 'aromatisse',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png',
    },
    {
      id: 684,
      name: 'swirlix',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/684.png',
    },
    {
      id: 685,
      name: 'slurpuff',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png',
    },
    {
      id: 686,
      name: 'inkay',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png',
    },
    {
      id: 687,
      name: 'malamar',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png',
    },
    {
      id: 688,
      name: 'binacle',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png',
    },
    {
      id: 689,
      name: 'barbaracle',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png',
    },
    {
      id: 690,
      name: 'skrelp',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/690.png',
    },
    {
      id: 691,
      name: 'dragalge',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png',
    },
    {
      id: 692,
      name: 'clauncher',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/692.png',
    },
    {
      id: 693,
      name: 'clawitzer',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png',
    },
    {
      id: 694,
      name: 'helioptile',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png',
    },
    {
      id: 695,
      name: 'heliolisk',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png',
    },
    {
      id: 696,
      name: 'tyrunt',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png',
    },
    {
      id: 697,
      name: 'tyrantrum',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png',
    },
    {
      id: 698,
      name: 'amaura',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png',
    },
    {
      id: 699,
      name: 'aurorus',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png',
    },
    {
      id: 700,
      name: 'sylveon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png',
    },
    {
      id: 701,
      name: 'hawlucha',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png',
    },
    {
      id: 702,
      name: 'dedenne',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png',
    },
    {
      id: 703,
      name: 'carbink',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png',
    },
    {
      id: 704,
      name: 'goomy',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png',
    },
    {
      id: 705,
      name: 'sliggoo',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/705.png',
    },
    {
      id: 706,
      name: 'goodra',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png',
    },
    {
      id: 707,
      name: 'klefki',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png',
    },
    {
      id: 708,
      name: 'phantump',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png',
    },
    {
      id: 709,
      name: 'trevenant',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png',
    },
    {
      id: 710,
      name: 'pumpkaboo-average',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/710.png',
    },
    {
      id: 711,
      name: 'gourgeist-average',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/711.png',
    },
    {
      id: 712,
      name: 'bergmite',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png',
    },
    {
      id: 713,
      name: 'avalugg',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png',
    },
    {
      id: 714,
      name: 'noibat',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png',
    },
    {
      id: 715,
      name: 'noivern',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png',
    },
    {
      id: 716,
      name: 'xerneas',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png',
    },
    {
      id: 717,
      name: 'yveltal',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png',
    },
    {
      id: 718,
      name: 'zygarde-50',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png',
    },
    {
      id: 719,
      name: 'diancie',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png',
    },
    {
      id: 720,
      name: 'hoopa',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png',
    },
    {
      id: 721,
      name: 'volcanion',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png',
    },
    {
      id: 722,
      name: 'rowlet',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png',
    },
    {
      id: 723,
      name: 'dartrix',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/723.png',
    },
    {
      id: 724,
      name: 'decidueye',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png',
    },
    {
      id: 725,
      name: 'litten',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png',
    },
    {
      id: 726,
      name: 'torracat',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png',
    },
    {
      id: 727,
      name: 'incineroar',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png',
    },
    {
      id: 728,
      name: 'popplio',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png',
    },
    {
      id: 729,
      name: 'brionne',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/729.png',
    },
    {
      id: 730,
      name: 'primarina',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png',
    },
    {
      id: 731,
      name: 'pikipek',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/731.png',
    },
    {
      id: 732,
      name: 'trumbeak',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/732.png',
    },
    {
      id: 733,
      name: 'toucannon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png',
    },
    {
      id: 734,
      name: 'yungoos',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png',
    },
    {
      id: 735,
      name: 'gumshoos',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png',
    },
    {
      id: 736,
      name: 'grubbin',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png',
    },
    {
      id: 737,
      name: 'charjabug',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/737.png',
    },
    {
      id: 738,
      name: 'vikavolt',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png',
    },
    {
      id: 739,
      name: 'crabrawler',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/739.png',
    },
    {
      id: 740,
      name: 'crabominable',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png',
    },
    {
      id: 741,
      name: 'oricorio-baile',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/741.png',
    },
    {
      id: 742,
      name: 'cutiefly',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png',
    },
    {
      id: 743,
      name: 'ribombee',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png',
    },
    {
      id: 744,
      name: 'rockruff',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png',
    },
    {
      id: 745,
      name: 'lycanroc-midday',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png',
    },
    {
      id: 746,
      name: 'wishiwashi-solo',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/746.png',
    },
    {
      id: 747,
      name: 'mareanie',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/747.png',
    },
    {
      id: 748,
      name: 'toxapex',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png',
    },
    {
      id: 749,
      name: 'mudbray',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/749.png',
    },
    {
      id: 750,
      name: 'mudsdale',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png',
    },
    {
      id: 751,
      name: 'dewpider',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png',
    },
    {
      id: 752,
      name: 'araquanid',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png',
    },
    {
      id: 753,
      name: 'fomantis',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/753.png',
    },
    {
      id: 754,
      name: 'lurantis',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png',
    },
    {
      id: 755,
      name: 'morelull',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/755.png',
    },
    {
      id: 756,
      name: 'shiinotic',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png',
    },
    {
      id: 757,
      name: 'salandit',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png',
    },
    {
      id: 758,
      name: 'salazzle',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png',
    },
    {
      id: 759,
      name: 'stufful',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/759.png',
    },
    {
      id: 760,
      name: 'bewear',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png',
    },
    {
      id: 761,
      name: 'bounsweet',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/761.png',
    },
    {
      id: 762,
      name: 'steenee',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/762.png',
    },
    {
      id: 763,
      name: 'tsareena',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png',
    },
    {
      id: 764,
      name: 'comfey',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/764.png',
    },
    {
      id: 765,
      name: 'oranguru',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/765.png',
    },
    {
      id: 766,
      name: 'passimian',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png',
    },
    {
      id: 767,
      name: 'wimpod',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/767.png',
    },
    {
      id: 768,
      name: 'golisopod',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png',
    },
    {
      id: 769,
      name: 'sandygast',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/769.png',
    },
    {
      id: 770,
      name: 'palossand',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png',
    },
    {
      id: 771,
      name: 'pyukumuku',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/771.png',
    },
    {
      id: 772,
      name: 'type-null',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/772.png',
    },
    {
      id: 773,
      name: 'silvally',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png',
    },
    {
      id: 774,
      name: 'minior-red-meteor',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/774.png',
    },
    {
      id: 775,
      name: 'komala',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png',
    },
    {
      id: 776,
      name: 'turtonator',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/776.png',
    },
    {
      id: 777,
      name: 'togedemaru',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png',
    },
    {
      id: 778,
      name: 'mimikyu-disguised',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png',
    },
    {
      id: 779,
      name: 'bruxish',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/779.png',
    },
    {
      id: 780,
      name: 'drampa',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png',
    },
    {
      id: 781,
      name: 'dhelmise',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png',
    },
    {
      id: 782,
      name: 'jangmo-o',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/782.png',
    },
    {
      id: 783,
      name: 'hakamo-o',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/783.png',
    },
    {
      id: 784,
      name: 'kommo-o',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png',
    },
    {
      id: 785,
      name: 'tapu-koko',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png',
    },
    {
      id: 786,
      name: 'tapu-lele',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png',
    },
    {
      id: 787,
      name: 'tapu-bulu',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png',
    },
    {
      id: 788,
      name: 'tapu-fini',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/788.png',
    },
    {
      id: 789,
      name: 'cosmog',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/789.png',
    },
    {
      id: 790,
      name: 'cosmoem',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/790.png',
    },
    {
      id: 791,
      name: 'solgaleo',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png',
    },
    {
      id: 792,
      name: 'lunala',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png',
    },
    {
      id: 793,
      name: 'nihilego',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/793.png',
    },
    {
      id: 794,
      name: 'buzzwole',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/794.png',
    },
    {
      id: 795,
      name: 'pheromosa',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/795.png',
    },
    {
      id: 796,
      name: 'xurkitree',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/796.png',
    },
    {
      id: 797,
      name: 'celesteela',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/797.png',
    },
    {
      id: 798,
      name: 'kartana',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/798.png',
    },
    {
      id: 799,
      name: 'guzzlord',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/799.png',
    },
    {
      id: 800,
      name: 'necrozma',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/800.png',
    },
    {
      id: 801,
      name: 'magearna',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/801.png',
    },
    {
      id: 802,
      name: 'marshadow',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png',
    },
    {
      id: 803,
      name: 'poipole',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/803.png',
    },
    {
      id: 804,
      name: 'naganadel',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/804.png',
    },
    {
      id: 805,
      name: 'stakataka',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/805.png',
    },
    {
      id: 806,
      name: 'blacephalon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/806.png',
    },
    {
      id: 807,
      name: 'zeraora',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/807.png',
    },
    {
      id: 808,
      name: 'meltan',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/808.png',
    },
    {
      id: 809,
      name: 'melmetal',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/809.png',
    },
    {
      id: 810,
      name: 'grookey',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png',
    },
    {
      id: 811,
      name: 'thwackey',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/811.png',
    },
    {
      id: 812,
      name: 'rillaboom',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png',
    },
    {
      id: 813,
      name: 'scorbunny',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png',
    },
    {
      id: 814,
      name: 'raboot',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/814.png',
    },
    {
      id: 815,
      name: 'cinderace',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/815.png',
    },
    {
      id: 816,
      name: 'sobble',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png',
    },
    {
      id: 817,
      name: 'drizzile',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/817.png',
    },
    {
      id: 818,
      name: 'inteleon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/818.png',
    },
    {
      id: 819,
      name: 'skwovet',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/819.png',
    },
    {
      id: 820,
      name: 'greedent',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/820.png',
    },
    {
      id: 821,
      name: 'rookidee',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/821.png',
    },
    {
      id: 822,
      name: 'corvisquire',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/822.png',
    },
    {
      id: 823,
      name: 'corviknight',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png',
    },
    {
      id: 824,
      name: 'blipbug',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/824.png',
    },
    {
      id: 825,
      name: 'dottler',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/825.png',
    },
    {
      id: 826,
      name: 'orbeetle',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/826.png',
    },
    {
      id: 827,
      name: 'nickit',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/827.png',
    },
    {
      id: 828,
      name: 'thievul',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/828.png',
    },
    {
      id: 829,
      name: 'gossifleur',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/829.png',
    },
    {
      id: 830,
      name: 'eldegoss',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/830.png',
    },
    {
      id: 831,
      name: 'wooloo',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/831.png',
    },
    {
      id: 832,
      name: 'dubwool',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/832.png',
    },
    {
      id: 833,
      name: 'chewtle',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/833.png',
    },
    {
      id: 834,
      name: 'drednaw',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/834.png',
    },
    {
      id: 835,
      name: 'yamper',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/835.png',
    },
    {
      id: 836,
      name: 'boltund',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/836.png',
    },
    {
      id: 837,
      name: 'rolycoly',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/837.png',
    },
    {
      id: 838,
      name: 'carkol',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/838.png',
    },
    {
      id: 839,
      name: 'coalossal',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/839.png',
    },
    {
      id: 840,
      name: 'applin',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/840.png',
    },
    {
      id: 841,
      name: 'flapple',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/841.png',
    },
    {
      id: 842,
      name: 'appletun',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png',
    },
    {
      id: 843,
      name: 'silicobra',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/843.png',
    },
    {
      id: 844,
      name: 'sandaconda',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/844.png',
    },
    {
      id: 845,
      name: 'cramorant',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/845.png',
    },
    {
      id: 846,
      name: 'arrokuda',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/846.png',
    },
    {
      id: 847,
      name: 'barraskewda',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/847.png',
    },
    {
      id: 848,
      name: 'toxel',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/848.png',
    },
    {
      id: 849,
      name: 'toxtricity-amped',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/849.png',
    },
    {
      id: 850,
      name: 'sizzlipede',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/850.png',
    },
    {
      id: 851,
      name: 'centiskorch',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/851.png',
    },
    {
      id: 852,
      name: 'clobbopus',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/852.png',
    },
    {
      id: 853,
      name: 'grapploct',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/853.png',
    },
    {
      id: 854,
      name: 'sinistea',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/854.png',
    },
    {
      id: 855,
      name: 'polteageist',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/855.png',
    },
    {
      id: 856,
      name: 'hatenna',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/856.png',
    },
    {
      id: 857,
      name: 'hattrem',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/857.png',
    },
    {
      id: 858,
      name: 'hatterene',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/858.png',
    },
    {
      id: 859,
      name: 'impidimp',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/859.png',
    },
    {
      id: 860,
      name: 'morgrem',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/860.png',
    },
    {
      id: 861,
      name: 'grimmsnarl',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/861.png',
    },
    {
      id: 862,
      name: 'obstagoon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/862.png',
    },
    {
      id: 863,
      name: 'perrserker',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/863.png',
    },
    {
      id: 864,
      name: 'cursola',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/864.png',
    },
    {
      id: 865,
      name: 'sirfetchd',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/865.png',
    },
    {
      id: 866,
      name: 'mr-rime',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/866.png',
    },
    {
      id: 867,
      name: 'runerigus',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/867.png',
    },
    {
      id: 868,
      name: 'milcery',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/868.png',
    },
    {
      id: 869,
      name: 'alcremie',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/869.png',
    },
    {
      id: 870,
      name: 'falinks',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/870.png',
    },
    {
      id: 871,
      name: 'pincurchin',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/871.png',
    },
    {
      id: 872,
      name: 'snom',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/872.png',
    },
    {
      id: 873,
      name: 'frosmoth',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/873.png',
    },
    {
      id: 874,
      name: 'stonjourner',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/874.png',
    },
    {
      id: 875,
      name: 'eiscue-ice',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/875.png',
    },
    {
      id: 876,
      name: 'indeedee-male',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/876.png',
    },
    {
      id: 877,
      name: 'morpeko-full-belly',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/877.png',
    },
    {
      id: 878,
      name: 'cufant',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/878.png',
    },
    {
      id: 879,
      name: 'copperajah',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/879.png',
    },
    {
      id: 880,
      name: 'dracozolt',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/880.png',
    },
    {
      id: 881,
      name: 'arctozolt',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/881.png',
    },
    {
      id: 882,
      name: 'dracovish',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/882.png',
    },
    {
      id: 883,
      name: 'arctovish',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/883.png',
    },
    {
      id: 884,
      name: 'duraludon',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/884.png',
    },
    {
      id: 885,
      name: 'dreepy',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/885.png',
    },
    {
      id: 886,
      name: 'drakloak',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/886.png',
    },
    {
      id: 887,
      name: 'dragapult',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png',
    },
    {
      id: 888,
      name: 'zacian',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/888.png',
    },
    {
      id: 889,
      name: 'zamazenta',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/889.png',
    },
    {
      id: 890,
      name: 'eternatus',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/890.png',
    },
    {
      id: 891,
      name: 'kubfu',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/891.png',
    },
    {
      id: 892,
      name: 'urshifu-single-strike',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png',
    },
    {
      id: 893,
      name: 'zarude',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/893.png',
    },
    {
      id: 894,
      name: 'regieleki',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/894.png',
    },
    {
      id: 895,
      name: 'regidrago',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/895.png',
    },
    {
      id: 896,
      name: 'glastrier',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/896.png',
    },
    {
      id: 897,
      name: 'spectrier',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/897.png',
    },
    {
      id: 898,
      name: 'calyrex',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/898.png',
    },
    {
      id: 899,
      name: 'wyrdeer',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/899.png',
    },
    {
      id: 900,
      name: 'kleavor',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/900.png',
    },
  ];

  const pokemon = await prisma.pokemon.createMany({
    data: pokemonData,
    skipDuplicates: true,
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
