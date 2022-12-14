import { useContext } from "react";
import { Closed } from "../../../atoms";
import { SearchContext } from '../../../../context';
import styles from "./ModalSearch.module.css";

export const ModalSearch = () => {
  const { setModalSearchInfo} =
    useContext(SearchContext);

  const closedModalPlate = () => {
    setModalSearchInfo({
      state: false,
      description: ""
    });
  };

return (
    <div className={styles.containerModalSearch}>
      <div className={styles.modalSearch}>
        <button onClick={closedModalPlate} className={styles.buttonClosedModal}>
          <Closed />
        </button>
      </div>
    </div>
  );
};
