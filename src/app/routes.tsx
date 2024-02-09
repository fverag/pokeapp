import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Pokemon, loader as pokemonLoader } from "../features/chosenPokemon";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pokemon/:id",
    element: <Pokemon />,
    loader: pokemonLoader,
  },
]);
