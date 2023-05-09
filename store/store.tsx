import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonsSlice";

export default configureStore({
  reducer: {
    pokemons: pokemonReducer,
  },
});
