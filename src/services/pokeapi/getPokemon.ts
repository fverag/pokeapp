import axios from "axios";
import { BASE_URL, ENDPOINTS } from "./constants";
import { PokemonDetails } from "../../common/types";

export const getPokemon = async (
  idOrName: number | string
): Promise<PokemonDetails | null> => {
  const url = `${BASE_URL}${ENDPOINTS.pokemon}/${idOrName}`;

  try {
    const request = await axios.get<PokemonDetails>(url);
    return request.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
