import axios from 'axios'

export const getPokemons = async () => {
    try {
        return (await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=150`)).data
    }catch (error){
        console.log(error);
        return {error: "Error en la consulta de varios Pokemones"}
    }
}

export const getPokemon = async (url) => {
    try {
        return await axios.get(url)
    }catch (error){
        console.log(error);
        return {error: "Error en la consulta de un Pokemon"}
    }
}