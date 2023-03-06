import {PokemonsType} from '@type/pokemons.types'

export interface PokemonApiResponseType {
  abilities?: [];
  base_experience?: number;
  forms?: [];
  game_indices?: [];
  height?: number;
  held_items?: [];
  id?: number;
  is_default?: boolean;
  location_area_encounters?: string;
  moves?: [];
  name?: string;
  order?: number;
  past_types?: [];
  stats?: [];
  types?: [];
  weight?: number;
}

export interface PokemonsApiResponseType {
    count: string;
    next: string  | null;
    previous: string | null;
    results: [PokemonsType]
}