import {FaWindowClose} from "react-icons/fa";
import styles from  './Closed.module.scss'

export const Closed = () => {
  return (
    <div className={styles.containerClosed}>
        <FaWindowClose/>
    </div>
  )
}
