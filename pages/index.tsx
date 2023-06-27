import { Col } from "antd";
import Searcher from "@UI/searcher";
import React, { useEffect } from "react";
import styles from "@style/pages/index/index.module.css";
import List from "@UI/list";
import Image from "next/image";
import { useSelector } from "react-redux";
import { iStoreType } from "@type/store/store.types";
import ButtonPanel from "@comp/UI/buttonPanel";

const Index = () => {
  const pokemons = useSelector((state: iStoreType) => state.pokemons);

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
      <Col className={styles.button_panel} span={9} offset={8}>
        <ButtonPanel />
      </Col>
      <br />
      {!!pokemons && pokemons.length > 0 && <List pokemons={pokemons} />}
    </div>
  );
};

export default Index;
