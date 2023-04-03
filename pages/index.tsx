import { Col } from "antd";
import Searcher from "@UI/searcher";
import React, { useEffect, useState } from "react";
import styles from "@style/pages/index/index.module.css";
import List from "@UI/list";
import Image from "next/image";
import { getPokemons, getPokemon } from "../service/pokemons";
import { PokemonsType } from "@type/pokemons.types";
import {
  PokemonApiResponseType,
  PokemonsApiResponseType,
} from "@type/service/pokemons.types";

const Index = () => {
  const [pokemons, setPokemons] = useState<PokemonsType[]>([]);

  useEffect(() => {
    const request = async () => {
      const data: PokemonsApiResponseType = await getPokemons();
      let promises = data.results.map(async (pokemon: PokemonsType) => {
        const complementData: Promise<PokemonApiResponseType> =
          await getPokemon(pokemon.url);
        return {
          ...pokemon,
          ...complementData,
        } as PokemonsType;
      });
      const completePokemons: PokemonsType[] = await Promise.all(promises);
      setPokemons(completePokemons);
      console.log("completePokemons", completePokemons);
    };
    request();
  }, []);

  return (
    <div>
      <Col span={5} offset={10}>
        <Image
          className={styles.image_pokedex}
          src="/images/pokedex_logo.png"
          alt="Pokedex"
          width="374"
          height="135"
        />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <br />
      <List pokemons={pokemons} />
    </div>
  );
};

export default Index;
