import clsx from "clsx";
import { Link, useLoaderData } from "react-router-dom";
import { PokemonDetails } from "../../common/types";
import { formatText } from "../../common/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faTrash,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { ChosenPokemon } from "./ChosenPokemon";
import {
  addToChosen,
  removeFromChosen,
  selectChosen,
} from "./chosenPokemonSlice";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { heightToCm, mapStats } from "./helpers";

export const Pokemon = (): JSX.Element => {
  const { pokemonDetails } = useLoaderData() as {
    pokemonDetails: PokemonDetails;
  };

  const { id, name, sprites, height, types, stats } = pokemonDetails;
  const mappedStats = stats ? mapStats(stats) : [];
  const dispatch = useAppDispatch();
  const chosen = useAppSelector(selectChosen);
  const isChosen = chosen.find((entry) => entry.id === id) !== undefined;

  const buttonOnClick = () => {
    if (isChosen) {
      dispatch(removeFromChosen(id));
    } else {
      dispatch(addToChosen(pokemonDetails));
    }
  };

  const image =
    sprites.other.dream_world.front_default || sprites.front_default;
  const tdValuesClassName = "pl-5";

  return (
    <div className="flex items-start gap-5 max-w-screen-2xl mx-auto">
      <div className="w-[70%]">
        <article className=" bg-slate-50 rounded-md px-10 py-10 flex flex-wrap justify-between">
          <h2 className="w-full mb-5">
            <sup className="inline-block text-xs text-center font-bold bg-violet-800 p-[3px] rounded text-white w-7 h-6 relative top-[3px] -left-[4px]">
              {id}
            </sup>
            <span className="block text-3xl font-bold">{formatText(name)}</span>
          </h2>
          <div>
            <img
              src={image}
              alt={name}
              height="300"
              width="200"
              className="mb-2"
            />
          </div>

          <div className="px-2 w-[50%] text-left">
            <h3 className="text-lg font-bold mb-3">Características</h3>

            <table>
              <tbody>
                <tr>
                  <th>Altura</th>
                  <td className={tdValuesClassName}>{heightToCm(height)}</td>
                </tr>
                <tr>
                  <th>Tipo</th>
                  <td className={tdValuesClassName}>
                    {types
                      .map((entry) => formatText(entry.type.name))
                      .join(", ")}
                  </td>
                </tr>

                <tr>
                  <th colSpan={2} className="py-3">
                    Estadísticas base:
                  </th>
                </tr>

                {mappedStats.map(({ label, value }) => (
                  <tr key={label}>
                    <th>{label}</th>
                    <td className={tdValuesClassName}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-full flex justify-between border-t border-gray-200 mt-10">
            <Link
              to={"/"}
              className="text-white px-4 py-2 border-2 rounded-xl mt-4 bg-gray-500 hover:bg-gray-600 active:bg-gray-400"
            >
              <FontAwesomeIcon icon={faAngleLeft} className="mr-4" />
              Volver
            </Link>

            <button
              type="button"
              onClick={() => buttonOnClick()}
              className={clsx(
                "text-white px-4 py-2 border-2 rounded-xl mt-4 ",
                {
                  "bg-green-500 hover:bg-green-600 active:bg-green-400":
                    !isChosen,
                  "bg-red-500 hover:bg-red-600 active:bg-red-400": isChosen,
                }
              )}
            >
              {isChosen ? (
                <>
                  <span>Quitar Pokemón</span>
                  <FontAwesomeIcon icon={faTrash} className="ml-4" />
                </>
              ) : (
                <>
                  <span>Agregar Pokemón</span>
                  <FontAwesomeIcon icon={faPlus} className="ml-4" />
                </>
              )}
            </button>
          </div>
        </article>
      </div>

      <ChosenPokemon className="w-[450px] min-w-[450px]" />
    </div>
  );
};
