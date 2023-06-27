import { StarOutlined, StarFilled } from "@ant-design/icons";
import { Card as AntCard } from "antd";
import { useDispatch } from "react-redux";
import { likePokemon } from "store/pokemonsSlice";
import styles from "./Card.module.css";
const { Meta } = AntCard;

const Card = ({
  name,
  img,
  description,
  liked = false,
  onLikeHandle = () => {},
}) => {
  return (
    <div className={styles.card_container}>
      <AntCard
        hoverable
        style={{ width: 240 }}
        title={name}
        cover={<img src={img} alt={name} />}
        extra={liked ? <StarFilled className={styles.starFilled} /> : <StarOutlined />}
        onClick={onLikeHandle}
      >
        <Meta description={description} />
      </AntCard>
    </div>
  );
};

export default Card;
