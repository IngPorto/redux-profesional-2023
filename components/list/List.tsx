import Card from "@comp/card/Card";
import styles from "./List.module.css";
import { PokemonsType } from "@type/pokemons.types";
import { useEffect } from "react";

const List = ({ pokemons }) => {
  useEffect(() => {
    console.log("pokemons", pokemons);
  }, []);

  return (
    <div className={styles.list_container}>
      {pokemons &&
        pokemons.map((pokemon, index) => {
          const description = pokemon.types
            .map((type) => type.type.name)
            .join(", ");

          return (
            <Card
              name={pokemon.name}
              img={pokemon.sprites.front_default}
              description={description}
              key={index}
            />
          );
        })}
    </div>
  );
};

List.defaultProps = {
  pokemons: Array(10).fill(""),
};

export default List;
