import { Col } from "antd";
import Searcher from "@comp/searcher/Searcher";
import React, { useEffect, useState } from "react";
import styles from "@style/pages/index/index.module.css";
import Card from "@comp/card/Card";
import List from "@comp/list/List";
import Image from "next/image";
import { getPokemons, getPokemon } from "../service/pokemons";
import { PokemonsType, PokemontApiResponseType } from "@type/pokemons.types";

const Index = () => {
  const [pokemons, setPokemons] = useState<PokemonsType[]>([]);

  useEffect(() => {
    const request = async () => {
      const data: PokemontApiResponseType = await getPokemons();
      let completePokemons = data.results.map(async (pokemon) => {
        const complementData = await getPokemon(pokemon.url);
        return {
          ...pokemon,
          ...complementData.data,
        };
      });
      completePokemons = await Promise.all(completePokemons)
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
