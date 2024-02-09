import { PokemonListEntryEnriched } from "../../common/types";

export interface InitialState {
  entries: PokemonListEntryEnriched[];
  originalEntries: PokemonListEntryEnriched[];
  searchTerm: string;
  retrivedEntries: boolean;
}
