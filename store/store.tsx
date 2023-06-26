import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonsSlice";
import { logger, featuring } from "middleware";
import { applyMiddleware, compose } from "@reduxjs/toolkit";

const composedEnhancers = compose(applyMiddleware(logger));

export default configureStore({
  reducer: {
    pokemons: pokemonReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger).concat(featuring),
});
