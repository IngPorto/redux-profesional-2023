import { StarOutlined } from "@ant-design/icons";
import { Card as AntCard } from "antd";
import styles from "./Card.module.css";
const { Meta } = AntCard;

const Card = ({ name, img, description}) => {
  return (
    <div className={styles.card_container}>
      <AntCard
        hoverable
        style={{ width: 240 }}
        title={name}
        cover={<img src={img} alt={name} />}
        extra={<StarOutlined />}
      >
        <Meta description={description} />
      </AntCard>
    </div>
  );
};

export default Card;
