export interface PokemonsType {
    name: string;
    url: string;
}

export interface PokemontApiResponseType {
    count: string;
    next: string  | null;
    previous: string | null;
    results: [PokemonsType]
}