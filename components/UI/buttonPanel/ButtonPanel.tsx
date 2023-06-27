import { Button } from "antd";
import { getPokemonList, addPokemons } from "store/pokemonsSlice";
import { useDispatch } from "react-redux";
import React from "react";

const ButtonPanel = () => {
  const dispatch = useDispatch();

  const handleGetGen1 = () => {
    console.log("...Fetching Gen 1");
    getPokemonList(151, 0).then((list) => {
      console.log("list: ", list);
      dispatch(addPokemons(list));
    });
  };
  const handleGetGen2 = () => {
    console.log("...Fetching Gen 2");
    getPokemonList(100, 151).then((list) => {
      console.log("list: ", list);
      dispatch(addPokemons(list));
    });
  };
  const handleGetGen3 = () => {
    console.log("...Fetching Gen 3");
    getPokemonList(135, 251).then((list) => {
      console.log("list: ", list);
      dispatch(addPokemons(list));
    });
  };
  const handleGetGen4 = () => {
    console.log("...Fetching Gen 4");
    getPokemonList(135, 386).then((list) => {
      console.log("list: ", list);
      dispatch(addPokemons(list));
    });
  };
  return (
    <>
      <Button onClick={handleGetGen1}>Gen 1</Button>
      <Button onClick={handleGetGen2}>Gen 2</Button>
      <Button onClick={handleGetGen3}>Gen 3</Button>
      <Button onClick={handleGetGen4}>Gen 4</Button>
    </>
  );
};

export default ButtonPanel;
