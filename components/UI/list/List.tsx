import Card from "@comp/UI/card/Card";
import styles from "./List.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { likePokemon } from "store/pokemonsSlice";

const List = ({ pokemons }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("pokemons", pokemons);
  }, []);

  const onLikeHandle = (name) => {
    dispatch(likePokemon(name));
  };

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
              liked={pokemon.like}
              onLikeHandle={() => onLikeHandle(pokemon.name)}
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
