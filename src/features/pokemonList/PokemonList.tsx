import { useAppSelector, useAppDispatch } from "../../common/hooks";
import {
  selectPokemonList,
  selectPokemonListRetrievedEntries,
} from "./pokemonListSlice";
import {
  addToChosenAsync,
  removeFromChosen,
  selectChosen,
} from "../chosenPokemon/chosenPokemonSlice";
import { PokemonItem, ActionsButton } from "../../common/components";

export const PokemonList = () => {
  const entries = useAppSelector(selectPokemonList);
  const retrivedEntries = useAppSelector(selectPokemonListRetrievedEntries);
  const chosen = useAppSelector(selectChosen);
  const dispatch = useAppDispatch();

  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-6 mx-auto justify-center">
      {entries.length ? (
        entries.map((pokemon, index) => {
          const isChosen =
            chosen.find((entry) => entry.name === pokemon.name) !== undefined;

          const actionOnClick = () => {
            dispatch(
              isChosen
                ? removeFromChosen(pokemon.id)
                : addToChosenAsync(pokemon.id)
            );
          };

          return (
            <li key={pokemon.name}>
              <PokemonItem
                {...pokemon}
                useLink
                colorClassName={
                  index % 2 ? "border-cyan-700 bg-cyan-500" : undefined
                }
                hoverColorClassName={
                  index % 2 ? "hover:bg-cyan-600" : undefined
                }
                buttonSlot={
                  <ActionsButton
                    onClick={() => actionOnClick()}
                    showAsAdded={isChosen}
                  />
                }
              />
            </li>
          );
        })
      ) : retrivedEntries ? (
        <li className="w-full bg-red-400 text-center rounded-md px-2 py-10 mt-10 text-xl">
          No pokemones encontrados para el término que buscas
        </li>
      ) : null}
    </ul>
  );
};
