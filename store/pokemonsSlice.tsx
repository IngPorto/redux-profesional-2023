import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemon, getPokemons } from "@service/pokemons";
import { PokemonsType } from "@type/pokemons.types";
import {
  PokemonApiResponseType,
  PokemonsApiResponseType,
} from "@type/service/pokemons.types";

export const getPokemonList = async (limit = 151, offset = 0) => {
  const data: PokemonsApiResponseType = await getPokemons(limit, offset);
  let promises = data.results.map(async (pokemon: PokemonsType) => {
    const complementData: Promise<PokemonApiResponseType> = await getPokemon(
      pokemon.url
    );
    return {
      ...pokemon,
      ...complementData,
    } as PokemonsType;
  });
  const completePokemons: PokemonsType[] = await Promise.all(promises);
  return completePokemons;
};

export const fecthPokemons = createAsyncThunk("pokemon/", async () => {
  return await getPokemonList();
});

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: [],
  reducers: {
    addPokemons: (state, { payload }) => {
      // state.push(...action.payload);
      return  payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fecthPokemons.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { addPokemons } = pokemonSlice.actions;
export default pokemonSlice.reducer;
