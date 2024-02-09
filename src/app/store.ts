import { configureStore } from "@reduxjs/toolkit";
import { pokemonListReducer } from "../features/pokemonList";
import { chosenPokemonReducer } from "../features/chosenPokemon";

export const store = configureStore({
  reducer: {
    pokemonList: pokemonListReducer,
    chosenPokemon: chosenPokemonReducer,
  },
});
