import clsx from "clsx";
import { Link } from "react-router-dom";
import { PokemonItemProps } from "./types";
import { formatText } from "../../helpers";

const ChildrenContent = ({
  name,
  image,
}: Omit<PokemonItemProps, "actionsOnClick">) => (
  <>
    {formatText(name)}
    <img
      src={image}
      alt={name}
      width="96"
      height="96"
      loading="lazy"
      decoding="async"
    />
  </>
);

export const PokemonItem = ({
  useLink = false,
  colorClassName = "border-sky-700 bg-sky-500",
  hoverColorClassName = "hover:bg-sky-600",
  buttonSlot,
  ...restProps
}: PokemonItemProps): JSX.Element => {
  const className = clsx(
    "block rounded-lg border text-center shadow-md shadow-black text-white font-bold px-5 py-2 w-32 h-32",
    colorClassName,
    {
      pointer: useLink,
      [hoverColorClassName]: useLink,
    }
  );

  if (useLink) {
    return (
      <div className="relative transition-all hover:scale-110">
        {buttonSlot}
        <Link to={`/pokemon/${restProps.name}`} className={className}>
          <ChildrenContent {...restProps} />
        </Link>
      </div>
    );
  }

  return (
    <article className={clsx("relative", className)}>
      {buttonSlot}
      <ChildrenContent {...restProps} />
    </article>
  );
};
