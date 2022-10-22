import {FaWindowClose} from "react-icons/fa";
import styles from  './Closed.module.css'

export const Closed = () => {
  return (
    <div className={styles.containerClosed}>
        <FaWindowClose/>
    </div>
  )
}
