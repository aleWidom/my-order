import { useContext } from "react";
import { OrderContext } from "../../../../context";
import { Closed } from "../../../atoms";
import styles from "./ModalPlate.module.scss";

export const ModalPlate = () => {
  const { modalPlate, setModalPlate, setModalPlateRequired, cart, setCart } =
    useContext(OrderContext);

  const closedModalPlate = () => {
    setModalPlate({
      id: 0,
      state: false,
      title: "",
      price: "0",
      description: "",
      quantity: 1,
      photo: ""
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
        photo: modalPlate.photo,
        description: modalPlate.description,
      },
    ]);
    setModalPlateRequired({
      id: modalPlate.id,
      title: modalPlate.title,
      quantity: modalPlate.quantity,
      state: true,
    });
    setModalPlate({
      id: 0,
      state: false,
      title: "",
      price: "0",
      description: "",
      quantity: 1,
      photo: ""
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
        <small className={styles.priceUnit}> (precio x unidad)</small>
        <div className={styles.containerQuantity}>
          <p className={styles.quantity}>Cantidad: {modalPlate.quantity}</p>
          <button onClick={addQuantity} className={styles.buttonQuantity}>
            <p className={styles.sign}>+</p>
          </button>
          {modalPlate.quantity > 1 && (
            <button
              onClick={substractQuantity}
              className={styles.buttonQuantity}
            >
               <p className={styles.sign}>-</p>
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
