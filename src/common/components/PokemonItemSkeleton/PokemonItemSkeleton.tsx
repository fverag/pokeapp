import clsx from "clsx";

export const PokemonItemSkeleton = (): JSX.Element => (
  <article
    className={clsx(
      "block rounded-lg border border-zinc-500 bg-zinc-400 shadow-lg shadow-black opacity-25",
      "px-5 py-2 w-32 h-32"
    )}
  />
);
