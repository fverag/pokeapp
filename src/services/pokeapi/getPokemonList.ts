import axios from "axios";
import {
  BASE_URL,
  ENDPOINTS,
  FIST_GEN_LIMIT,
  LIST_IMAGE_URL_FORMAT,
} from "./constants";
import { PokemonListEntry, PokemonListEntryEnriched } from "../../common/types";
import { extractIdFromUrl } from "../../common/helpers";

/*
  Image is not available through the endpoint but we may
  guess it by extracting the id of the url retrived
*/
const buildListImage = (id: number): string =>
  LIST_IMAGE_URL_FORMAT.replace(":id", id.toString());

export const getPokemonList = async (
  limit: number = FIST_GEN_LIMIT
): Promise<PokemonListEntryEnriched[]> => {
  const url = `${BASE_URL}${ENDPOINTS.pokemon}?limit=${limit}`;

  try {
    const request = await axios.get<{ results: PokemonListEntry[] }>(url);
    const { results } = request.data;

    return results.map((pokemon) => {
      const id = extractIdFromUrl(pokemon.url);

      return {
        ...pokemon,
        image: buildListImage(id),
        id,
      };
    });
  } catch (error) {
    console.error(error);
    return [];
  }
};
