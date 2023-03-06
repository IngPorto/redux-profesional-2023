import { PokemonApiResponseType } from "@type/service/pokemons.types";

export interface PokemonsType extends PokemonApiResponseType {
  name: string;
  url: string;
}
