import React, { useContext } from "react";
import { OrderContext } from "../../../../context";
import styles from "./Plate.module.css";

export const Plate = ({ price, description, header, source, setLoading }) => {

const { modalPlate, setModalPlate } = useContext(OrderContext);

  const handleClickRequest = () => {
    setModalPlate({
      ...modalPlate,
      state: true,
      title: header,
      price: price,
      img: source,
      description: description
    });

  };

  return (
    <div className={styles.containerCardMenu} onClick={handleClickRequest}>
      <div className={styles.containerDescription}>
        <h4 className={styles.header}>{header}</h4>
        <p className={styles.description}>
          {description.length > 40
            ? description.slice(0, 42) + "..."
            : description}
        </p>
        <p className={styles.price}>${price}</p>
      </div>
      <div className={styles.containerImg}>
        <img src={source} className={styles.imgCardDishFood} alt={""} />
      </div>
    </div>
  );
};
