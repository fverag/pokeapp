import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppDispatch, PokemonDetails } from "../../common/types";
import {
  SLICE_NAME,
  INITIAL_STATE,
  MAX_POKEMON_CHOSEN,
  REACHED_LIMIT_MESSAGE,
  CONFIRM_REMOVE_MESSAGE,
} from "./constants";
import { getPokemon } from "../../services";

export const chosenPokemonSlice = createSlice({
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    addToChosen: (state, action: PayloadAction<PokemonDetails>) => {
      const isThereRoom = state.chosen.length < MAX_POKEMON_CHOSEN;
      const isNotRepeated =
        state.chosen.find((pokemon) => pokemon.id === action.payload.id) ===
        undefined;

      if (isThereRoom && isNotRepeated) {
        state.chosen = [...state.chosen, action.payload];
      } else {
        alert(REACHED_LIMIT_MESSAGE);
      }
    },
    removeFromChosen: (state, action: PayloadAction<PokemonDetails["id"]>) => {
      if (window.confirm(CONFIRM_REMOVE_MESSAGE)) {
        state.chosen = state.chosen.filter(
          (pokemon) => pokemon.id !== action.payload
        );
      }
    },
  },
});

export const { addToChosen, removeFromChosen } = chosenPokemonSlice.actions;

export const addToChosenAsync =
  (id: number) => async (dispatch: AppDispatch) => {
    const pokemon = await getPokemon(id);

    if (pokemon) {
      dispatch(addToChosen(pokemon));
    }
  };

export const { reducer: chosenPokemonReducer } = chosenPokemonSlice;

export const selectChosen = (state: RootState) => state[SLICE_NAME].chosen;
