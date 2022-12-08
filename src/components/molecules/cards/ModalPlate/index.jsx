import { useContext } from "react";
import { OrderContext } from "../../../../context";
import { Closed } from "../../../atoms";
import styles from "./ModalPlate.module.css";

export const ModalPlate = () => {
  const { modalPlate, setModalPlate, cart, setCart } = useContext(OrderContext);

  const closedModalPlate = () => {
    setModalPlate({
      id: 0,
      state: false,
      title: "",
      price: 0,
      img: "",
      description: "",
      quantity: 1,
    });
  };

  const handleClickRequest = () => {
    setCart([
      ...cart,
      {
        id: modalPlate.id,
        title: modalPlate.title,
        price: modalPlate.price,
        quantity: modalPlate.quantity,
      },
    ]);
    setModalPlate({
      id: 0,
      state: false,
      title: "",
      price: 0,
      img: "",
      description: "",
      quantity: 1,
    });
  };

  const addQuantity = () => {
    setModalPlate({
      ...modalPlate,
      quantity: modalPlate.quantity + 1,
    });
  };

  const substractQuantity = () => {
    setModalPlate({
      ...modalPlate,
      quantity: modalPlate.quantity - 1,
    });
  };

  return (
    <div className={styles.containerModalPlate}>
      <div className={styles.modalPlate}>
        <button onClick={closedModalPlate} className={styles.buttonClosedModal}>
          <Closed />
        </button>
        <h2 className={styles.title}>{modalPlate.title}</h2>
        <p className={styles.description}>{modalPlate.description}</p>
        <p className={styles.price}>${modalPlate.price}</p>
        <div className={styles.containerQuantity}>
          <p className={styles.quantity}>Cantidad: {modalPlate.quantity}</p>
          <button onClick={addQuantity} className={styles.buttonQuantity}>
            +
          </button>
          {modalPlate.quantity > 1 && (
            <button
              onClick={substractQuantity}
              className={styles.buttonQuantity}
            >
              -
            </button>
          )}
        </div>
        <button onClick={handleClickRequest} className={styles.request}>
          Solicitar
        </button>
      </div>
    </div>
  );
};
