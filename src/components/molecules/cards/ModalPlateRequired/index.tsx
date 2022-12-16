import { useContext, useEffect } from "react";
import { FaRegGrinAlt } from "react-icons/fa";
import { OrderContext } from "../../../../context";
import styles from "./ModalPlateRequired.module.scss";

export const ModalPlateRequired = () => {
  const { modalPlateRequired, setModalPlateRequired } =
    useContext(OrderContext);

  useEffect(() => {
    setTimeout(() => {
      setModalPlateRequired({
        id: 0,
        title: "",
        quantity: 1,
        state: false,
      });
    }, 2000);
  }, [setModalPlateRequired]);

  return (
    <div className={styles.containerModalPlate}>
      <div className={styles.modalPlate}>
        <FaRegGrinAlt className={styles.emoji} />
        <h2
          className={styles.title}
        >{`Su ${modalPlateRequired.title} llegará en unos minutos.`}</h2>
        <p className={styles.quantity}>
          Cantidad: {`${modalPlateRequired.quantity}`}
        </p>
        <small className={styles.edit}>Para editar la orden puede ir a sección mis solicitudes.</small>
      </div>
    </div>
  );
};
