import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  RootState,
  AppDispatch,
  PokemonListEntryEnriched,
} from "../../common/types";
import { getPokemonList } from "../../services";
import { SLICE_NAME, INITIAL_STATE } from "./constants";

export const pokemonListSlice = createSlice({
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    setList: (state, action: PayloadAction<PokemonListEntryEnriched[]>) => {
      state.entries = action.payload;
      state.originalEntries = action.payload;
      state.retrivedEntries = true;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      const term = action.payload.toLowerCase();
      state.searchTerm = term;
      state.entries = state.originalEntries.filter(({ name }) =>
        name.toLowerCase().includes(term)
      );
    },
    resetSearchTerm: (state) => {
      state.searchTerm = "";
      state.entries = state.originalEntries;
    },
  },
});

export const { setList, setSearchTerm, resetSearchTerm } =
  pokemonListSlice.actions;

export const setListAsync = () => async (dispatch: AppDispatch) => {
  const entries = await getPokemonList();

  dispatch(setList(entries));
};

export const { reducer: pokemonListReducer } = pokemonListSlice;

export const selectPokemonList = (state: RootState) =>
  state[SLICE_NAME].entries;

export const selectPokemonListRetrievedEntries = (state: RootState) =>
  state[SLICE_NAME].retrivedEntries;

export const selectSearchTerm = (state: RootState) =>
  state[SLICE_NAME].searchTerm;
