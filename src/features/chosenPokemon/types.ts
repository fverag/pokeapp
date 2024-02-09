import { PokemonDetails } from "../../common/types";

export interface InitialState {
  chosen: PokemonDetails[];
}

export interface ChosenPokemonProps {
  className?: string;
}
