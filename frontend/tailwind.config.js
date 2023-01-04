/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pokeblue: "#3d6d79",
        pokedarkblue: "#1b3941",
        pokeorange: "#d69d66",
        pokewhite: "#e0e2ee",
      },
    },
  },
  plugins: [],
};
