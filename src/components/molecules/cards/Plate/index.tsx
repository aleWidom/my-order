import { FC, useContext } from "react";
import { OrderContext } from "../../../../context";
import styles from "./Plate.module.scss";

interface Props {
  price: string;
  description: string;
  header: string;
  source: string;
  id: string;
}

export const Plate: FC<Props> = ({
  price,
  description,
  header,
  source,
  id,
}) => {
  const {setModalPlate /* , cart */ } = useContext(OrderContext);

  const handleClickRequest = () => {
    setModalPlate({
      ItemID: `${id}`,
      state: true,
      title: header,
      price: price,
      description: description,
      modalType: 'main',
      quantity: 1
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
      {/* <div className={styles.containerImg}>
        <img src={source} className={styles.imgCardDishFood} alt={""} />
      </div> */}
    </div>
  );
};
