import { store } from "../app/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface PokemonListEntry {
  name: string;
  url: string;
}

export interface PokemonListEntryEnriched extends PokemonListEntry {
  image: string;
  id: number;
}

interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonDetails {
  name: string;
  id: number;
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  height: number;
  types: PokemonType[];
  stats: PokemonStat[];
}
