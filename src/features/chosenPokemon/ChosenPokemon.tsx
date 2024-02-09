import clsx from "clsx";
import { useAppSelector, useAppDispatch } from "../../common/hooks";
import { selectChosen, removeFromChosen } from "./chosenPokemonSlice";
import { ChosenPokemonProps } from "./types";
import {
  PokemonItem,
  PokemonItemSkeleton,
  ActionsButton,
} from "../../common/components";
import { MAX_POKEMON_CHOSEN } from "./constants";

export const ChosenPokemon = ({
  className,
}: ChosenPokemonProps): JSX.Element => {
  const chosen = useAppSelector(selectChosen);
  const deltaItems = MAX_POKEMON_CHOSEN - chosen.length;
  const dispatch = useAppDispatch();

  return (
    <section
      className={clsx(
        "bg-slate-500 sticky top-3 p-3 pb-10 rounded-md text-center text-white",
        className
      )}
    >
      <h2 className="font-bold text-2xl mt-3">Listos para el combate</h2>
      {chosen.length ? (
        <>
          <ul className="flex flex-wrap gap-5 mt-12 justify-center">
            {chosen.map((pokemon) => {
              const buttonOnClick = () => {
                dispatch(removeFromChosen(pokemon.id));
              };

              return (
                <li key={pokemon.name}>
                  <PokemonItem
                    {...pokemon}
                    colorClassName="border-violet-700 bg-violet-700"
                    hoverColorClassName="hover:bg-violet-500"
                    image={pokemon.sprites.front_default}
                    buttonSlot={
                      <ActionsButton
                        onClick={() => buttonOnClick()}
                        showAsAdded={true}
                      />
                    }
                  />
                </li>
              );
            })}
            {deltaItems
              ? Array(deltaItems)
                  .fill("")
                  .map((_, index) => <PokemonItemSkeleton key={index} />)
              : null}
          </ul>
        </>
      ) : (
        <div className="py-20">
          <p>Aquí apareceran los pokemones que agregues para el combate</p>
        </div>
      )}
    </section>
  );
};
