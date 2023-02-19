import { Col } from 'antd'
import Searcher from '@comp/searcher/Searcher';
import React from 'react'
import styles from '@style/pages/index/index.module.css'
import Card from '@comp/card/Card';
import List from '@comp/list/List';

const Index = () => {
  return (
    <div>
      <h1 className={styles.title}>Hello</h1>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <br />
      <List />
    </div>
  );
};

export default Index;
