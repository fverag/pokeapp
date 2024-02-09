import { getPokemon } from "../../services";

export const loader = async ({ params }: { params: { id?: string } }) => {
  const { id } = params;
  const pokemonDetails = id ? await getPokemon(id) : null;

  return { pokemonDetails };
};
