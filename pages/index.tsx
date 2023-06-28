import { Col } from "antd";
import Searcher from "@UI/searcher";
import React from "react";
import styles from "@style/pages/index/index.module.css";
import List from "@UI/list";
import Image from "next/image";
import { useSelector } from "react-redux";
import { iStoreType } from "@type/store/store.types";
import ButtonPanel from "@comp/UI/buttonPanel";
import { Spin } from "antd";
import { motion } from "framer-motion";

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
      {!!pokemons && pokemons.length > 0 ? (
        <List pokemons={pokemons} />
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }} 
        >
          <div className={styles.spin_content}>
            <Spin spinning size="large" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Index;
