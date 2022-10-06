import {FaSearch} from "react-icons/fa";
import styles from './Search.module.css'

export const Search = ({handleSubmit}) => {
    return (
      <button onClick={handleSubmit} className={styles.button}><FaSearch className={styles.search} /></button>
  )
}

