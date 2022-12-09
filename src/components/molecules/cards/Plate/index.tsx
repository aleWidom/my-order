import { FC, useContext } from "react";
import { OrderContext } from "../../../../context";
import styles from "./Plate.module.css";

interface Props {
  price: string;
  description: string;
  header: string;
  source: string;
  id: number;
}

export const Plate: FC<Props> = ({
  price,
  description,
  header,
  source,
  id,
}) => {
  const { modalPlate, setModalPlate /* , cart */ } = useContext(OrderContext);

  const handleClickRequest = () => {
    setModalPlate({
      ...modalPlate,
      id: id,
      state: true,
      title: header,
      price: price,
      description: description,
    });
  };

  /*   const plateInCart = cart.find((e) => {
    return e.title === header;
  }); */

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
        {/* <p>{plateInCart && <small className={styles.plateInCart}>{`Su ${plateInCart.title} llegara en unos minutos a su mesa ${':)'}` }</small>}</p>  */}
      </div>
      <div className={styles.containerImg}>
        <img src={source} className={styles.imgCardDishFood} alt={""} />
      </div>
    </div>
  );
};
