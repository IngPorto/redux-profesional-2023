import { StarOutlined } from "@ant-design/icons";
import { Card as AntCard } from "antd";
import styles from './Card.module.css';
const { Meta } = AntCard;


const Card = () => {
  return (
    <div className={styles.card_container}>
        <AntCard
        hoverable
        style={{ width: 240 }}
        title="Ditto"
        cover={
            <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Ditto"
            />
        }
        extra={<StarOutlined />}
        >
        <Meta description="fire, magic" />
        </AntCard>
    </div>
  );
};

export default Card;
