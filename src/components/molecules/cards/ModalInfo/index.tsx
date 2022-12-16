import { useContext } from "react";
import { FaRegSmile } from "react-icons/fa";
import { Closed } from "../../../atoms";
import { SearchContext } from '../../../../context';
import styles from "./ModalInfo.module.scss";

export const ModalInfo = () => {
  const { modalInfo, setModalInfo} =
    useContext(SearchContext);

  const closedModalPlate = () => {
    setModalInfo({
      state: false,
      description: "",
      section: ""
    });
  };

return (
    <div className={styles.containerModalInfo}>
      <div className={styles.modalInfo}>
        {modalInfo.section === 'form' ? 
        <button onClick={closedModalPlate} className={styles.buttonClosedModal}>
          <Closed />
        </button> : <FaRegSmile className={styles.smile}/>}
        <p className={styles.description}>{modalInfo.description}</p>
      </div>
    </div>
  );
};
