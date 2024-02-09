import { InitialState } from "./types";

export const SLICE_NAME = "chosenPokemon";
export const INITIAL_STATE: InitialState = {
  chosen: [],
};
export const MAX_POKEMON_CHOSEN = 6;
export const REACHED_LIMIT_MESSAGE = `No puedes agregar más de ${MAX_POKEMON_CHOSEN} pokemones`;
export const CONFIRM_REMOVE_MESSAGE =
  "¿Estás seguro que deseas quitar este pokemon?";

export const STATS_MAPPING = {
  hp: "Hit points",
  attack: "Ataque",
  defense: "Defensa",
  "special-attack": "Ataque especial",
  "special-defense": "Defensa especial",
  speed: "Velocidad",
};
