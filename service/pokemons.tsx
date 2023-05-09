import axios from 'axios'

export const getPokemons = async (limit:number = 151, offset:number = 0) => {
    try {
        return (await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)).data
    }catch (error){
        console.log(error);
        return {error: "Error en la consulta de varios Pokemones"}
    }
}

export const getPokemon = async (url) => {
    try {
        return (await axios.get(url)).data
    }catch (error){
        console.log(error);
        return {error: "Error en la consulta de un Pokemon"}
    }
}