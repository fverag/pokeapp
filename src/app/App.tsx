import { useEffect } from "react";
import {
  PokemonList,
  SearchBar,
  setListAsync,
  selectPokemonListRetrievedEntries,
} from "../features/pokemonList";
import { useAppSelector, useAppDispatch } from "../common/hooks";
import { ChosenPokemon } from "../features/chosenPokemon";

export const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const retrievedEntries = useAppSelector(selectPokemonListRetrievedEntries);

  useEffect(() => {
    if (!retrievedEntries) {
      dispatch(setListAsync());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [retrievedEntries]);

  return (
    <main className="flex items-start justify-between max-w-screen-2xl mx-auto gap-4">
      <div className="w-[calc(100%-450px)]">
        <SearchBar />
        <PokemonList />
      </div>

      <ChosenPokemon className="w-[450px] min-w-[450px]" />
    </main>
  );
};
