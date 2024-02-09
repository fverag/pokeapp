import { InitialState } from "./types";

export const SLICE_NAME = "pokemonList";
export const INITIAL_STATE: InitialState = {
  entries: [],
  originalEntries: [],
  searchTerm: "",
  retrivedEntries: false,
};
