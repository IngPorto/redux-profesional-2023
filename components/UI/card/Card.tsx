import { StarOutlined, StarFilled } from "@ant-design/icons";
import { Card as AntCard } from "antd";
import styles from "./Card.module.css";
import { motion } from "framer-motion";

const { Meta } = AntCard;

const Card = ({
  name,
  img,
  description,
  liked = false,
  onLikeHandle = () => {},
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className={styles.card_container}>
        <AntCard
          hoverable
          style={{ width: 240 }}
          title={name}
          cover={<img src={img} alt={name} />}
          extra={
            liked ? (
              <StarFilled className={styles.starFilled} />
            ) : (
              <StarOutlined />
            )
          }
          onClick={onLikeHandle}
        >
          <Meta description={description} />
        </AntCard>
      </div>
    </motion.div>
  );
};

export default Card;
