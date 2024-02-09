import clsx from "clsx";
import { ActionsButtonProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

export const ActionsButton = ({ onClick, showAsAdded }: ActionsButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "rounded-full absolute -right-2 -top-2  transition-colors w-7 h-7 shadow-lg text-white",
        {
          "bg-green-600 border border-green-800 hover:bg-green-700":
            !showAsAdded,
          "bg-red-600 border border-red-800 hover:bg-red-700": showAsAdded,
        }
      )}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={showAsAdded ? faTrash : faPlus} />
    </button>
  );
};
