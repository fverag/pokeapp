import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import {
  setSearchTerm,
  resetSearchTerm,
  selectSearchTerm,
} from "./pokemonListSlice";

export const SearchBar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const searchTermValue = useAppSelector(selectSearchTerm);
  const onInputChange = (term: string) => dispatch(setSearchTerm(term));
  const onButtonClick = () => dispatch(resetSearchTerm());
  const showClearButton = Boolean(searchTermValue.length);

  return (
    <div className="w-full bg-slate-500 max-w-[85%] mx-auto mb-3 rounded-lg px-3 py-3 flex justify-between">
      <input
        type="text"
        placeholder="Buscar un pokemon"
        onChange={(event) =>
          onInputChange((event.target as HTMLInputElement).value)
        }
        value={searchTermValue}
        className="px-4 py-2 h-7 placeholder:text-zinc-600 rounded-md w-full"
      />

      {showClearButton ? (
        <button
          type="button"
          onClick={() => onButtonClick()}
          className="w-[100px]"
        >
          Limpiar
          <FontAwesomeIcon icon={faTimes} className="ml-2" />
        </button>
      ) : null}
    </div>
  );
};
